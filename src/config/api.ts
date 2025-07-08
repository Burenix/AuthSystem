const isDevelopment = process.env.NODE_ENV === 'development';
export const BASE_URL = isDevelopment
    ? 'http://localhost:8001'
    : 'https://api.id.magiclab.space'