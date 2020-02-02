function loginController(req, res, next) {
    res.send('Sign in!');
}

function resistrationController(req, res, next) {
    res.send('Sign up!');
}

module.exports = {
    loginController,
    resistrationController
};
