/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        test: '/',
        dist: '/dist',
    },
    plugins: ['@snowpack/plugin-typescript'],
    install: [
        /* ... */
    ],
    installOptions: {
        installTypes: true,
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
    proxy: {
        /* ... */
    },
    alias: {
        /* ... */
    },
};
