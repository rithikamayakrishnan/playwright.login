import { test,expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Facebook Login Scenarios', () => {

  test('TC01 - Valid login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.enterEmail('Gokul.s@Nexasoft.com');
    await login.enterPassword('Gokul@123');
    await login.clicklogin();
    await login.clickSkipTour();
    await login.clickGS();
     await page.waitForTimeout(5000);
    await login.clicklogout(); 
}); 

  /*test('TC02 - Invalid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.enterEmail('Gokul.s@Nexasoft.com');
   await login.enterPassword('wrong_password');
   await login.clicklogin();
   await page.waitForTimeout(3000);
  });*/

  test('TC03 - Invalid Email', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.enterEmail('Email');
    await page.waitForTimeout(3000);
    await login.enterPassword('Gokul@123');
     await login.clicklogin();
     await page.waitForTimeout(3000);
  });

  test('TC04 - Empty fields', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.enterEmail('            ');
     await page.waitForTimeout(3000);
    await login.enterPassword('           ');
     await login.clicklogin();
     await page.waitForTimeout(3000);
  });

  test('TC05 - Login button UI validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    
    const loginBtn = page.getByRole('button', { name: 'Sign In' });
    await expect(loginBtn).toBeVisible();
  });
  test('TC06 - Only numbers in fields',async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.enterEmail('12345678');
    await page.waitForTimeout(3000);
    await login.enterPassword('0345987');
     await login.clicklogin();
     await page.waitForTimeout(3000);
  });
  test('TC07 - Only alphabet in fields',async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.enterEmail('AWEERJTDGFKYT');
    await login.enterPassword('QWERTYUIOP');
     await login.clicklogin();
     await page.waitForTimeout(5000);
  });
  test('TC08 - Only special character in fields',async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
     await page.waitForTimeout(3000);
    await login.enterEmail('@#@#@');
     await page.waitForTimeout(3000);
    await login.enterPassword('&*&*&');
     await login.clicklogin();
     await page.waitForTimeout(3000);
  });
    test('TC09 - check the Remember me',async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.enterEmail('');
    await login.enterPassword('');
     await login.clicklogin();
  });
   test('TC010 - max lenght in fields',async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLogin();
    await login.enterEmail('rithikamayakrishnan@4465678');
    await login.enterPassword('e');
     await login.clicklogin();
       await page.waitForTimeout(3000);
  });

});
test('TC011 - Remember Me checkbox validation', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  const rememberMe = page.locator('input[type="checkbox"]');
  await rememberMe.check();

  await expect(rememberMe).toBeChecked();
});

test('TC012 - Forgot Password link visibile', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await expect(page.getByText('Forgot password?')).toBeVisible();
});
test('TC13 - Google login button visibility', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await expect(page.getByRole('button', { name: /Google/i })).toBeVisible();
   await page.waitForTimeout(3000);
});


test('TC14 - Microsoft login button visibility', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await expect(page.getByRole('button', { name: /Microsoft/i })).toBeVisible();
   await page.waitForTimeout(3000);
});


test('TC15 - Verify Sign In button enabled', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeEnabled();
});

test('TC16 - Email with leading spaces', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await login.enterEmail('   Gokul.s@Nexasoft.com');
  await login.enterPassword('Gokul@123');
  await login.clicklogin();
  await page.waitForTimeout(3000);
});

test('TC17 - Email with trailing spaces', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await login.enterEmail('Gokul.s@Nexasoft.com   ');
  await login.enterPassword('Gokul@123');
  await login.clicklogin();
  await page.waitForTimeout(3000);
});

test('TC18 - Maximum length Email field', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();
  await login.enterEmail('averylongemailaddress@testcompanydomain.com');
  await page.waitForTimeout(3000);
});


test('TC19 - Maximum length Password field', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await login.enterPassword('VeryLongPassword123456789');
  await page.waitForTimeout(3000);
});

test('TC20 - Verify Create Account link', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await expect(page.getByText('Create one for free')).toBeVisible();
});

test('TC21 - Verify Welcome Back heading', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await expect(page.getByText('Welcome back')).toBeVisible();
});
test('TC22 - Password masked validation', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  const passwordField = page.locator('input[type="password"]');
  await expect(passwordField).toBeVisible();
  await page.waitForTimeout(3000);
});
test('TC23 - Login after browser back button', async ({ page }) => {
  const login = new LoginPage(page);

  await login.gotoLogin();
  await page.goBack();

  await login.gotoLogin();
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});
test('TC24 - Mininum length Email field', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await login.enterEmail('s@.com');
  await page.waitForTimeout(3000);
});

test('TC25 - Minimum length Password field', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();

  await login.enterPassword('6789');
  await page.waitForTimeout(3000);
});
test('TC26 - password with leading spaces', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();
  await login.enterEmail('Gokul.s@Nexasoft.com');
  await login.enterPassword('     Gokul@123');
  await login.clicklogin();
  await page.waitForTimeout(3000);
});

  test('TC27 - password with trailing spaces', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLogin();
  await login.enterEmail('Gokul.s@Nexasoft.com');
  await login.enterPassword('Gokul@123    ');
   await login.clicklogin();
   await page.waitForTimeout(3000);
});
