declare namespace NodeJS {
  // Interface for variables set in .env file
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    DEBUG: boolean | false;
    // Next-Auth configurations
    NEXTAUTH_URL: string;
    SECRET: string;
    JWT_SECRET: string;
    // Next-Auth database
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    // Next-Auth providers variables
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
  }
}
