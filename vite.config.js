import { defineConfig } from 'vite';

export default defineConfig({
  // 다른 Vite 옵션들...

  resolve: {
    alias: {
      '@': './src', // 이 부분을 적절하게 수정
    },
  },
});
