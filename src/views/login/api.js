import $Https from '@Http/portalHttp.js';
import urlMap from '@Http/portalUrlMap.js';
import querystring from 'querystring';

function Login(params) {
    return $Https.post(urlMap.Login.login, querystring.stringify(params))
}

export default {
    Login
}