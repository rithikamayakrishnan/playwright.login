 import { expect, Page,} from '@playwright/test';
 
 export class  EmployeesPage {
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
   async clickEmployees() {
     await this.page.locator('a.sidebar-nav-item:has-text("Employees")').first().click();
 }
 }