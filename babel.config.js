module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@schemas': './src/schemas',
        '@controllers': './src/controllers',
        '@repositories': './src/repositories',
        '@middlewares': './src/middlewares',
        '@validators': './src/validators',
        '@utils': './src/utils'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
