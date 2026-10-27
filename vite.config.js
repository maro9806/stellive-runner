import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // 상대 경로로 빌드하여 어떤 호스팅(GitHub Pages, Vercel, itch.io 등)에서도 정상 작동
  server: {
    host: true // 같은 와이파이 네트워크 내 모바일/다른 PC에서도 접속 가능
  }
});
