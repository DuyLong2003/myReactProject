import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,      //  đổi cổng tại đây
    host: 'localhost' // (tùy chọn) đảm bảo chạy ở localhost
  }
})
