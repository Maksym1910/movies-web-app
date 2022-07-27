module.exports = () => ({
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
    // {
    //   test: /\.(jpg|jpeg)$/,
    //   use: {
    //     loader: 'file-loader',
    //   },
    // },
  ],
});
