const SSO = {
    login: '/sso/login'
}

// 主页
const main = {
    logout: '/sso/logout',
    // 获取全局数据
    getGlobalInfo: '/sso/getInfo',
    // 查询权限树
    queryAuthorityTree: '/permission/queryMenuTree',
    //修改密码
    updatePass: '/user/updatePassword'
};

export {
     SSO,
     main
};