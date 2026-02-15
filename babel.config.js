module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
    '@babel/preset-flow',
  ],
  plugins: [
    'babel-plugin-syntax-hermes-parser',
    '@babel/plugin-transform-flow-strip-types',
    [
      'module-resolver',
      {
        root: ['./lib'],
        alias: {
          '@utils': './lib/utils',
          '@components': './lib/components',
        },
      },
    ],
  ],
};
