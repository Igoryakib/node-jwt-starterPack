const jwt = require("jsonwebtoken");

const options = {
  expiresIn: "7d",
};

module.exports = generate = (payload) => jwt.sign(payload, process.env.JWT_SECRET, options);

module.exports = verify = (token) => jwt.verify(token, process.env.process.env.JWT_SECRET);
