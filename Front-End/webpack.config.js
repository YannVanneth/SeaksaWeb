module.exports = {
  // other configurations
  node: {
    require: "empty",
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.__NEXT_ROUTER_BASEPATH": JSON.stringify(""),
      })
    );
    return config;
  },
};
