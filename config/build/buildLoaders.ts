import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [options.isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: options.isDev,
        },
      },
    ],
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
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

  return [tsLoader, svgLoader, fileLoader, cssLoader];
}
