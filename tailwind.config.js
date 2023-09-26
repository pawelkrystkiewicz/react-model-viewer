const withTailwindConfig = require('@creation-ui/react/utils/withTailwindConfig')

/**@type{import('tailwindcss').Config}*/
module.exports = withTailwindConfig({
  content: [
    //
    './index.html',
    './**/*.{js,ts,jsx,tsx}',
    '*.css',
    './node_modules/@creation-ui/**',
  ],
})
