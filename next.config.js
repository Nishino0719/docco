/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const { resolve } = require("path");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["~"] = resolve(__dirname, "src");
    return config;
  },
};
// withOffline を読み込む
const withOffline = require("next-offline");

// nextConfig を withOffline に渡す
module.exports = withOffline(nextConfig);
