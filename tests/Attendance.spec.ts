import { test,expect } from '@playwright/test';
import {AttendancePage} from '../pages/AttendancePage';

test.describe('Facebook Login Scenarios', () => {

  test('TC01 - Valid login', async ({ page }) => {
    const login = new AttendancePage(page);
    await login.gotoLogin();
    await login.enterEmail('Gokul.s@Nexasoft.com');
    await login.enterPassword('Gokul@123');    
    await login.clicklogin();
    await login.clickSkipTour();
    await login.clickAttendance();
  });
});