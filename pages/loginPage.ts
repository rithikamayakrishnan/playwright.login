import { expect, Page,} from '@playwright/test';

export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoLogin() {
    await this.page.goto('https://hrms.xpertte.com/');
  }

  async enterEmail(Email: string) {
    await this.page.getByPlaceholder('you@company.com').fill(Email );
  }

  async enterPassword(password: string) {
    await this.page.getByPlaceholder('Enter your password').fill(password);
  }

  async clicklogin() {
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

  async clickSkipTour() {
    await this.page.getByText('Skip Tour').click();
  }
   
async clickGS(){
    await this.page.getByRole('button',{ name:'GS'}).click();
   }
    async clicklogout() {
   await this.page.getByRole('button', { name: 'Sign out' }).click();
    }

    
// async clickAttendance() {
//     await this.page.locator('a[href="/attendance/records"]').click();
// }
// }
}
