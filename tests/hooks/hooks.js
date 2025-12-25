import { test, expect } from '@playwright/test';

test.beforeAll(async () =>
{
  console.log('--- Before Each file ---');
});

test.afterAll(async () =>
{
  console.log('--- After each file ---');
});

test.beforeEach(async ({}, testInfo) =>
{
  console.log(`--- Starting test: ${testInfo.title} ---`);
});
test.afterEach(async ({}, testInfo) =>
{
  console.log(`--- Finished test: ${testInfo.title} ---`);
});