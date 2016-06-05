jetman = require('jetman');
jetman.setModuleObject(module);

baseUrl = 'https://httpbin.org/'

var tests = [
    require('./tests/initial_test.js'),
    require('./tests/root_test.js')
]

jetman.execute(tests);
