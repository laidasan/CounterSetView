module.exports = (api) => {
    // Cache configuration is a required option
    api.cache(false);
  
    const presets = [
      [
        "@babel/preset-env",
        {
          // useBuiltIns: 'usage',
          // useBuiltIns: 'usage',
          // corejs: 3
        }
      ],
      "@babel/preset-typescript",
      "@vue/babel-preset-jsx"
    ];

    const plugins = [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 3
        }
      ]
    ]
  
    return { presets,plugins };
  };
  