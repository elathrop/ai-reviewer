// File upload limits
export const MAX_FILE_SIZE_MB = 100;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

// Supported file types for analysis
export const SUPPORTED_FILE_TYPES = ['.pdf', '.docx', '.doc', '.txt', '.md', '.markdown'];

// Document render mode type
export type DocRenderMode = 'docling' | 'markdown';

/**
 * Feature flags controlled by environment variables.
 * These allow toggling features between environments (dev vs prod).
 */
export const featureFlags = {
  /**
   * WHY: Experimental workflows (Live Reports, Literature Review) are hidden on production
   * to simplify the UI for general users. Set NEXT_PUBLIC_SHOW_EXPERIMENTAL_FEATURES=true
   * in .env to enable for development/internal testing.
   */
  showExperimentalFeatures: process.env.NEXT_PUBLIC_SHOW_EXPERIMENTAL_FEATURES === 'true',
} as const;
