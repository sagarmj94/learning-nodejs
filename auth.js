const register = function (username) {
  console.log(`USer ${username} has been register`);
};
const login = function (username, password) {
  console.log(`USer ${username} is logged in`);
};

module.exports = { register, login };
