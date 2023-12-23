const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/login?%2F');
});

test.describe('Verify Element', () => {
    test('verify element on login page', async ({ page }) => {
        
        await expect(page).toHaveTitle('Masuk / Login - VCGamers');

        await expect(page.getByText('Selamat Datang')).toHaveText('Selamat Datang');

        await expect(page.getByText('di Platform Social-Commerce Pertama di Indonesia')).toHaveText('di Platform Social-Commerce Pertama di Indonesia');

        await page.close;
    });
});

test.describe('Login User Valid', () => {
    test('login as user vcgamers with valid email and password', async ({ page }) => {
        const Email = page.locator('xpath=//*[@id="login-page"]/div[1]/div[2]/div/div[1]/form/input');

        const Password = page.locator('xpath=/html/body/div[1]/div/div/div[1]/div[2]/div/div[1]/form/div[1]/input');

        const Avatar = page.locator('xpath=/html/body/div[1]/div/div/div[1]/header/div[3]/div/div[4]/div[1]/div/div[4]/div[1]/div/canvas');
        
        //please fill the email with your valid account
        await Email.fill('your email');

        //please fill the password with your valid account
        await Password.fill('12345678');

        await page.click('//*[@id="login-page"]/div[1]/div[2]/div/div[1]/form/button');

        await expect(Avatar).toBeVisible({ timeout: 15_000 })
        
        await page.close;
    });
});

test.describe('Login User', () => {
    test('login as user vcgamers with invalid email', async ({ page }) => {
        const Email = page.locator('xpath=//*[@id="login-page"]/div[1]/div[2]/div/div[1]/form/input');

        const Password = page.locator('xpath=/html/body/div[1]/div/div/div[1]/div[2]/div/div[1]/form/div[1]/input');

        //please fill the email with your valid account
        await Email.fill('email.email.com');

        //please fill the password with your valid account
        await Password.fill('12345678');

        await page.click('button:has-text("Masuk")');

        await expect(Avatar).toBeVisible({ timeout: 15_000 })
        
        await page.close;
    });
});

test.describe('Login User', () => {
    test('login as user vcgamers with invalid password', async ({ page }) => {
        const Email = page.locator('xpath=//*[@id="login-page"]/div[1]/div[2]/div/div[1]/form/input');

        const Password = page.locator('xpath=/html/body/div[1]/div/div/div[1]/div[2]/div/div[1]/form/div[1]/input');

        //please fill the email with your valid account
        await Email.fill('email.email.com');

        //please fill the password with your valid account
        //this is invalid password of my account
        await Password.fill('12345678');

        await page.click('button:has-text("Masuk")');

        await expect(Avatar).toBeVisible({ timeout: 15_000 })
        
        await page.close;
    });
});

test.describe('Login User', () => {
    test('login as user vcgamers without input email', async ({ page }) => {
        const Email = page.locator('xpath=//*[@id="login-page"]/div[1]/div[2]/div/div[1]/form/input');

        const Password = page.locator('xpath=/html/body/div[1]/div/div/div[1]/div[2]/div/div[1]/form/div[1]/input');

        //please fill the email with your valid account
        await Email.fill(' ');

        //please fill the password with your valid account
        await Password.fill('12345678');

        await page.click('button:has-text("Masuk")');

        await expect(Avatar).toBeVisible({ timeout: 15_000 })
        
        await page.close;
    });
});

test.describe('Login User', () => {
    test('login as user vcgamers without input password', async ({ page }) => {
        const Email = page.locator('xpath=//*[@id="login-page"]/div[1]/div[2]/div/div[1]/form/input');

        const Password = page.locator('xpath=/html/body/div[1]/div/div/div[1]/div[2]/div/div[1]/form/div[1]/input');

        //please fill the email with your valid account
        await Email.fill('email.email.com');

        //please fill the password with your valid account
        await Password.fill('');

        await page.click('button:has-text("Masuk")');

        await expect(Avatar).toBeVisible({ timeout: 15_000 })
        
        await page.close;
    });
});

test.describe('Login User', () => {
    test('login as user vcgamers without input any data', async ({ page }) => {
        const Email = page.locator('xpath=//*[@id="login-page"]/div[1]/div[2]/div/div[1]/form/input');

        const Password = page.locator('xpath=/html/body/div[1]/div/div/div[1]/div[2]/div/div[1]/form/div[1]/input');

        //please fill the email with your valid account
        await Email.fill(' ');

        //please fill the password with your valid account
        await Password.fill(' ');

        await page.click('button:has-text("Masuk")');

        await expect(Avatar).toBeVisible({ timeout: 15_000 })
        
        await page.close;
    });
});