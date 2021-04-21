import $Https from '@Http/portalHttp.js';
import * as urlMap from '@Http/portalUrlMap.js';

function _queryAuthorityTree(params) {
    return $Https.get(urlMap.main.queryAuthorityTree)
}

function _getGlobalInfo() {
    return $Https.get(urlMap.main.getGlobalInfo)
}

function _logout() {
    return $Https.post(urlMap.main.logout)
}

export {
    _queryAuthorityTree,
    _getGlobalInfo,
    _logout
}