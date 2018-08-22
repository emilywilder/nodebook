function start() {
    console.log("Request handler 'start' was called.")
    reutrn "Hello Start!"
}

function upload() {
    console.log("Request handler 'upload' was called.")
    reutrn "Hello Upload!"
}

exports.start = start
exports.upload = upload