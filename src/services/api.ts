import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com físico: IP da máquina
 * Android com emulador:
 *  1) Localhost: adb reverse tcp:3333 tcp:3333 (ABD Reverse)
 *  2) IP Emulador: 10.0.2.2 (Android Studio)
 *  3) IP Emulador: 10.0.2.3 (GenyMotion)
 *  4) Android com físico: IP da máquina
 */
