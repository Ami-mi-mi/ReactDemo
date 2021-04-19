const {createProxyMiddleware} = require('http-proxy-middleware');

// 后端host
const backEndHost = {
    // 修改成对应企业地址
    portal: 'http://106.75.95.89:18088',
    cbs: 'http://10.130.41.115:8180',
    process: 'http://106.75.95.89:18089',
    bicReport: 'http://localhost:8888',
    preview: 'http://106.75.95.89:9088'
};

module.exports = function(app) {
  app.use(createProxyMiddleware('/portal', {
        target: backEndHost.portal
    }
  ));

  app.use(createProxyMiddleware('/cbs', {
        target: backEndHost.cbs
    }
  ));

  app.use(createProxyMiddleware('/process', {
        target: backEndHost.process
    }
  ));

  app.use(createProxyMiddleware('/bicReport', {
        target: backEndHost.bicReport,
        proxyTimeout: 1000 * 60 * 30,
        timeout: 1000 * 60 * 30
    }
  ));

  app.use(createProxyMiddleware('/preview', {
        target: backEndHost.preview
    }
  ));
};