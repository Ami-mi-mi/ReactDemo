const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@Src' : path.resolve('src'),
            '@Assets' : path.resolve('src/assets'),
            '@Http' : path.resolve('src/http'),
            '@Js' : path.resolve('src/js'),
            '@Views' : path.resolve('src/views'),
            '@Router' : path.resolve('src/router'),
            '@Utils' : path.resolve('src/utils'),
            '@MainComponents' : path.resolve('src/views/main/components'),
            '@CommComponents' : path.resolve('src/commComponents'),
            '@Styles' : path.resolve('src/styles')
        }
    }
}