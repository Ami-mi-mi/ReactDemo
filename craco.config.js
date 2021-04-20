const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@Src' : path.resolve('src'),
            '@Assets' : path.resolve('src/assets'),
            '@Http' : path.resolve('src/http'),
            '@Views' : path.resolve('src/views'),
            '@Router' : path.resolve('src/router'),
            '@Utils' : path.resolve('src/utils')
        }
    }
}