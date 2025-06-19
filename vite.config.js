import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'auth-service-wts6.onrender.com/api/v1' // ⬅️ Add your ngrok domain here
    ]
  }
})
