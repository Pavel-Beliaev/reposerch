const path = require('path');

module.exports = {
  resolve: {
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
      components: path.resolve(__dirname, './src/components'),
      store: path.resolve(__dirname, './src/store'),
      router: path.resolve(__dirname, './src/router'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
