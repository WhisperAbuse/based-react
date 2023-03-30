import { BuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    static: options.paths.static,
    port: options.port,
    open: false,
    historyApiFallback: true,
    hot: true,
  };
}
