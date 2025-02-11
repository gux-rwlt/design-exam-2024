/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_X_BASE_URL: string;
  readonly VITE_API_MOCKING: string | undefined;
}
