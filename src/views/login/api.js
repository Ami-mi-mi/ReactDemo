import $Https from '@Http/portalHttp.js';
import * as urlMap from '@Http/portalUrlMap.js';
import querystring from 'querystring';

function Login(params) {
    return $Https.post(urlMap.SSO.login, querystring.stringify(params))
}

export {
    Login
}