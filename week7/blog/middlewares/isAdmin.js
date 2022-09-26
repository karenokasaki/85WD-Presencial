module.exports = (req, res, next) => {
  const loggedInUser = req.currentUser;

  if (loggedInUser.role !== "ADMIN") {
    return res
      .status(400)
      .json({ message: "Esse usuário não é um administrador" });
  }

  next();
};
