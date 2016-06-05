config =  {
    'description': 'Initial test for long DNS resolution in the first request',
    'url': baseUrl
}

exports.run = function () {
    jetman.send(config);
}
