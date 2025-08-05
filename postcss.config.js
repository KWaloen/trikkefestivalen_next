/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                "postcss-flexbugs-fixes",
                [
                  "postcss-preset-env",
                  {
                    stage: 3,
                    autoprefixer: { flexbox: "no-2009" },
                  },
                ],
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
