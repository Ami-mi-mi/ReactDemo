import $Https from '@Http/portalHttp.js';
import * as urlMap from '@Http/portalUrlMap.js';
import querystring from 'querystring';

function _queryUser(params) {
    return $Https.post(urlMap.userManage.query, querystring.stringify(params))
}

export {
    _queryUser
}