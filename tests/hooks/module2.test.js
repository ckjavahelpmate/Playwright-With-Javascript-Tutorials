import { test, expect } from '@playwright/test';
import './hooks.js';

test.describe('module-02 test-01',  { tag: ['@regression'] },() => 
{
  test('module-02 test-01 execution', async ({ page }) => 
  {
    console.log('Executing module-02 test-01');
  });   
});

test.describe('module-02 test-02', { tag: ['@regression'] }, () => 
{
  test('module-02 test-02 execution', async ({ page }) => 
  {
    console.log('Executing module-02 test-02');
  });   
});