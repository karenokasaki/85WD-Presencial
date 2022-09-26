const { expressjwt: expressJWT } = require("express-jwt");

module.exports = expressJWT({
  secret: process.env.TOKEN_SIGN_SECRET,
  algorithms: ["HS256"]
});


// ELE VAI CRIAR UMA CHAVE CHAMADA AUTH, NO REQ. 

 /* req.auth -> {
  "_id": "6331b3ba06d41691965b69cc",
  "email": "fabio@gmail.com",
  "role": "USER",
  "iat": 1664204608,
  "exp": 1664240608
} */