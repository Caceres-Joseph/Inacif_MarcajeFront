module.exports = {
    pages: {
        'menu': {
            entry: './src/pages/menu/main.js',
            template: 'public/Metro/index.html',
            title: 'Main panel'
        },
        //Modules
        'index': {
            entry: './src/pages/M01_login/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'users': {
            entry: './src/pages/M02_users/main.js',
            template: 'public/index.html',
            title: 'Users'
        },
        'hours': {
            entry: './src/pages/M03_hours/main.js',
            template: 'public/index.html',
            title: 'Hours'
        },
        'devices': {
            entry: './src/pages/M05_devices/main.js',
            template: 'public/index.html',
            title: 'Devices'
        },
    }
}