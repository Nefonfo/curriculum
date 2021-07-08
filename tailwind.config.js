module.exports = {
    darkMode: 'class',
    purge: {
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.pug',
      ],
      options: {
        keyframes: true,
        fontFace: true,
        variables: true,
      },
    },
    theme: {
      fontFamily: {
        sans: ['"Lato"', 'sans-serif'],
        serif: ['"Raleway"', 'sans-serif']
      }
    },
    variants: {},
    plugins: [],
}