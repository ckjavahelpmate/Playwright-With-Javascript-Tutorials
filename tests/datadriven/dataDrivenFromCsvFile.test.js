import { test, expect } from '@playwright/test';


test.beforeAll(async () =>
{
  console.log('--- Before All Tests ---');
});

test.afterAll(async () =>
{
  console.log('--- After All Tests ---');
});