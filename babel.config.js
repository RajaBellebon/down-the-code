module.exports = {
  presets: [
    [
      'babel-preset-gatsby',
      {
        useBuiltIns: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
