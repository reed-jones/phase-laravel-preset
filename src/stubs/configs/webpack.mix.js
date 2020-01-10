const mix = require('laravel-mix')
const path = require('path')
const tailwindcss = require('tailwindcss')
require('@j0nz/phase').PhaseMixPlugin

mix.webpackConfig({
    resolve: {
        alias: { "@": path.resolve(__dirname, 'resources', 'js') }
    }
})


mix.options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
      })
    .phase()
