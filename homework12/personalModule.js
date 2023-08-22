function welcomeUser() {
    const os = require("os");
    const userName = os.userInfo().username;
    const date = new Date();
    const hours = date.getHours();
    let greetings = "";

    if ((hours >= 0 && hours <= 4) || (hours >= 22 && hours <= 24)) {
        greetings = `Good night, ${userName}!`;
    } else if (hours >= 5 && hours <= 12) {
        greetings = `Good morning, ${userName}!`;
    } else if (hours > 12 && hours <= 17) {
        greetings = `Good afternoon, ${userName}!`;
    } else if (hours > 17 && hours <= 21) {
        greetings = `Good evening, ${userName}!`;
    }
    return greetings;
}

module.exports = { welcomeUser };