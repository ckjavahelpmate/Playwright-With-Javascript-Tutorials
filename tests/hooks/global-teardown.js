import { test } from '@playwright/test';

// global-teardown.js
export default async (globalData) => {
  console.log('--- Global Teardown: After all tests ---');

  if (globalData?.setupDone) {
    console.log('Global setup was completed');
  }

  // Clean up resources, delete test data, close connections, etc.
};
