import { test,expect } from '@playwright/test';
import {departmentsPage} from '../pages/departmentsPage';

test.describe('Facebook Login Scenarios', () => {

  test('TC01 - Valid login', async ({ page }) => {
    const login = new departmentsPage(page);
    await login.gotoLogin();
    await login.enterEmail('Gokul.s@Nexasoft.com');
    await login.enterPassword('Gokul@123');    
    await login.clicklogin();
    await login.clickSkipTour();
  await page.waitForTimeout(1000);
   await login.clickEmployees();
  await page.waitForTimeout(1000);
   await login.clickDepartments();
   await login.clickAddDepartment();
   await page.waitForTimeout(1000);
  await login.enterName('Rithika');
  await page.waitForTimeout(2000);
  await login.enterCode('RITHIKA');
  await page.waitForTimeout(2000);
  await login.clickParentDepartment();
  await page.waitForTimeout(2000);
  await login.clickCreateDepartment();
  await page.waitForTimeout(2000);
  });
}); 