const formatTime = (time) => {
    if (time < 60) {
        return time<10?`0${time}s`:`${time}s`
    } else {
        return Math.floor(time / 60) + 'm' + (time % 60) + 's';
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export {
    formatTime,
    validateEmail
}