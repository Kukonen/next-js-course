// module.exports = {
//   webpack(config) {
//     config.module.rules.loaders.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ['@svgr/webpack']
//     });

//     return config;
//   }
// }
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },

};
// module.exports = {
//   reactStrictMode: true,
// }
// module.exports = {
//   webpack: (config) => {
//     config.module.rules.loaders.push(
//       {
//         test: /\.svg$/,
//         loader: 'svg-inline-loader'
//       }
//     );
//     return config;
//   }
// };