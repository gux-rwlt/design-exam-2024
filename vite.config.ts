import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(
  ({ mode }
  ) => {
    const env = loadEnv(mode, process.cwd());

    return {
      base: `/${env.VITE_X_BASE_URL}`,
      plugins: [react()],
      resolve: {
        alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
      },
    };
  }
)