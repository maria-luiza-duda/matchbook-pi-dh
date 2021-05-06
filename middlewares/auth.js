module.exports = async (req, res, next) => {
    if (req.session.usersOn != null) {
        next();
    } else {
        res.redirect('/users/login')
    }
}