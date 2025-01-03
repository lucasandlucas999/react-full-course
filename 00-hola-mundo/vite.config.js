import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Esto hace que el servidor sea accesible desde cualquier dispositivo en la red local
    port: 3000,        // Puedes mantener o cambiar el puerto si lo prefieres
  }
})
