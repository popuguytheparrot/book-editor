module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true
      }
    ],
    '@babel/preset-react'
  ];
  const plugins = [
  ];

  return {
    presets,
    plugins
  };
};
