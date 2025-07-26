const mix = require('laravel-mix');

if (mix.inProduction()) {
    mix.version();
}

mix.setPublicPath('public');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .options({
       processCssUrls: false,
       postCss: [require('autoprefixer')()],
   });

mix.sourceMaps();

mix.browserSync({
    proxy: 'localhost:8000',
    files: [
        'app/**/*.php',
        'resources/views/**/*.php',
        'public/js/**/*.js',
        'public/css/**/*.css'
    ],
});
