module.exports = {
    pages: {
        'index': {
            entry: './src/pages/module01/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'users': {
            entry: './src/pages/module02/main.js',
            template: 'public/index.html',
            title: 'Users'
        }
    }
}