const fs = require('fs');
const DatabaseConnector = require('../../lib/common/mysql');

const { Users } = require('./model');

class FactoryService extends DatabaseConnector {
  constructor() {
    super();
    this.testUser = {
      userId: `'kimcoding'`,
      email: `'kimcoding@codestates.com'`,
      password: `'1234'`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async create(model) {
    const table = model.constructor.name;

    for (const col in model) {
      if (typeof model[col] === 'object') {
        const newCol = col + 'Id';
        model[newCol] = model[col];
        delete model[col];
      }
    }

    const column = Object.keys(model).join(',');
    const values = Object.values(model)
      .map((val) => (typeof val === 'object' ? val.id : val))
      .join(',');

    // HINT console.log below query when you want to know what happen in test
    console.log(values);
    return await this.query(
      `INSERT INTO ${table} (${column}) VALUES (${values})`
    );
  }

  async find({ table, column }) {
    return await this.query(`SELECT ${table}.${column} FROM ${table}`);
  }

  async setup() {
    await this.query(`USE ${this.config.database}`);
    await this.query(`TRUNCATE TABLE Users`);
  }

  async tearDown() {
    await this.query(`DROP DATABASE IF EXISTS ${this.config.database}`);
    await this.query(`CREATE DATABASE ${this.config.database}`);
    await this.query(`USE ${this.config.database}`);
  }

  async insertTestUser() {
    await factoryService.create(new Users(this.testUser));
  }

  async deleteTestUser({ email }) {
    await this.query(`DELETE FROM Users WHERE email=${email}`);
  }
}

const factoryService = new FactoryService();

module.exports = factoryService;
