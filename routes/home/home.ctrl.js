"use srtict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (rep, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
}