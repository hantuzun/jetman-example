config =  {
    'name': 'Root endpoint works',
    'method': 'GET',
    'url': baseUrl + 'get'
}

function baseTest() {
    tests['Status code is 200'] = responseCode.code === 200;
    tests['Response time is less than 500ms'] = responseTime < 500;
}

exports.run = function () {
    jetman.send(config, baseTest);
}
