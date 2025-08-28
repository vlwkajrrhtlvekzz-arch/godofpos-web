import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { join } from 'path';

export default {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias['~'] = join(process.cwd(), 'src');
    return config;
  },
};
