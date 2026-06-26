import { expect, Page,} from '@playwright/test';
 
 export class departmentsPage{
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
 async clickDepartments(){
     await this.page.getByRole('link',{name:'Departments'}).click();
 }
 async clickAddDepartment(){
    await this.page.getByRole('button', { name: 'Add Department' }).click();
  }
    async enterName(Name: string) {
    await this.page.getByPlaceholder('e.g., Engineering').fill(Name);
  }

  async entercode(Code: string) {
    await this.page.getByPlaceholder('e.g., ENG').fill(Code);
  }
  async enterCode(code: string) {
  await this.page.getByLabel('Code *').fill(code);
}
async clickParentDepartment() {
  await this.page.locator('#parent-department').selectOption({index:3});
}
async clickCreateDepartment() {
    await this.page.getByRole('button', { name: 'Create Department' }).click();
}
 }