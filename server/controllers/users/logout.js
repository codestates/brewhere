module.exports = (req, res) => {
  return res.status(205).json({message: "로그아웃이 완료되었습니다"});
}