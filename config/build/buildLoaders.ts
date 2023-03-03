import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.(sa|sc|c)ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.(sa|sc|c)ss$/i,
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
          importLoaders: 1,
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [['autoprefixer']],
          },
        },
      },
    ],
  };

  return [tsLoader, cssLoader];
}
