const loginHelper = (function () {
    let loggedIn = null;

    return {
        getLoggedIn: function () { return loggedIn },
        setLoggedIn: function (newUser) { loggedIn = newUser }
    }
})()

export { loginHelper }