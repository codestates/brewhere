const { brewery } = require('../../models');

module.exports = async(req, res) => {
  try {
    const storeInfo = await brewery.findAll();
    res.status(200).json({data: {storeInfo: storeInfo}, 
    message: 'find successfully'});
  } catch(err) {
    res.status(404).json({message: '존재하지 않는 id입니다'});
  }
}