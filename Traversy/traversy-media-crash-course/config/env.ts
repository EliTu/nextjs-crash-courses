const isDevEnv = process.env.NODE_ENV !== 'production';

export const serverUrl = isDevEnv ? 'http://localhost:3000' : 'https://yourwebsite.com';
