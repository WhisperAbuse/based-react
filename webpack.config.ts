import path from 'path';

import type { Configuration as WebpackConfiguration } from 'webpack';
import type { BuildEnv, BuildPaths } from './config/build/types/config';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const config: (env: BuildEnv) => WebpackConfiguration = (env) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    static: path.resolve(__dirname, 'public'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
};

export default config;
