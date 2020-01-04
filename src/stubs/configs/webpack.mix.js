const mix = require('laravel-mix')
const path = require('path')
const tailwindcss = require('tailwindcss')
require('@j0nz/phase').PhaseMixPlugin(mix)

mix.webpackConfig({
    resolve: {
        alias: { "@": path.resolve(__dirname, 'resources', 'js') }
    }
})


mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
      })
    .phaseRoutes()
