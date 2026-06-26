import { test,expect } from '@playwright/test';
import { designationPage } from '../pages/designationPage';

test.describe('Facebook Login Scenarios', () => {

  test('TC01 - Valid login', async ({ page }) => {
    const login = new designationPage(page);
    await login.gotoLogin();
    await login.enterEmail('Gokul.s@Nexasoft.com');
    await login.enterPassword('Gokul@123');    
    await login.clicklogin();
    await login.clickSkipTour();
    await login.clickEmployees();
    await page.waitForTimeout(5000);
    await login.clickDesignations();
   //await page.waitForTimeout(5000);
    await login.clickAddDesignation();
    //await page.waitForTimeout(5000);
    await login.enterName('Rithikaa');
    //await page.waitForTimeout(2000);
   //await login.enterGrade('L5');
    await page.waitForTimeout(2000);
    await login.clickCreateDesignation();
    await page.waitForTimeout(2000);
  });
});