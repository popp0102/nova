module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
    '@babel/preset-flow',
  ],
  plugins: [
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
