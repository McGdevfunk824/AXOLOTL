const path = require('path');
const { Application } = require('spectron');
const appPath = path.join(__dirname, '../dist/mac/AXOLOTL.app/Contents/MacOS/AXOLOTL');

function initializeSpectron() {
    return new Application({
        path: appPath,
        env: {
            ELECTRON_ENABLE_LOGGING: true,
            ELECTRON_ENABLE_STACK_DUMPING: true,
            NODE_ENV: 'development',
        },
        startTimeout: 10000,
    });
}

module.exports = { initializeSpectron };
