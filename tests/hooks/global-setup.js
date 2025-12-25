// global-setup.js
import { test } from '@playwright/test';

export default async () => {
    console.log('--- Global Setup: Before all tests ---');
    return { setupDone: true };
};
