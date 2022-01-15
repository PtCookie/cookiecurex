module.exports = require('babel-jest').default.createTransformer({
  rootMode: 'upward',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
});
