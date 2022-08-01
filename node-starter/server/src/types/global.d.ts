/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT: string;
        }
    }
}

export {};
