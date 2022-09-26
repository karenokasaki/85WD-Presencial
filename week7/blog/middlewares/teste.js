

function middlewareTeste(req, res, next) {
  console.log("Eu passei pelo middleware Teste");



  next();
}

module.exports = middlewareTeste;
