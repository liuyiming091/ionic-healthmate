var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
module.exports = {
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!\/__)/], 
    stripPrefix: 'www',
    root: 'www/',
    plugins: [
        new SWPrecacheWebpackPlugin({
          cacheId: 'ngx-ionic-health',
          filename: 'service-worker.js',
          staticFileGlobs: [
            'www/index.html',
            'www/build/**.js',
            'www/build/**.css'
          ],
          stripPrefix: 'www/assets/',
          mergeStaticsConfig: true // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config
        }),
    ]
};