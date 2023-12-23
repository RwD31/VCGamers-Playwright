const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.vcgamers.com/marketplace/category/Voucher?limit=20&page=1&categoryid=3');
});

test.describe('Verify Element', () => {
    test('verify element on voucher page', async ({ page }) => {
        
        await expect(page).toHaveTitle('Top Up Game Murah dan Cepat di VCGamers Marketplace');

        await expect(page.getByText('Kategori')).toHaveText('Kategori');

        await expect(page.getByText('Voucher')).toHaveText('Voucher');

        await page.close;
    });
});

test.describe('Search', () => {
    test('seearch kategori dengan valid', async ({ page }) => {
        const search = page.locator('xpath=//*[@id="items-search"]')
        const steam = page.locator('xpath=/html/body/div[1]/div/div/div[3]/div/div/div[2]/div[2]/div/div[1]/a[2]/p')

        await search.fill('steam');

        await expect(steam.first()).toHaveText('steam');

        await page.close;
    });
});

test.describe('Search', () => {
    test('seearch kategori dengan invalid', async ({ page }) => {
        const search = page.locator('xpath=//*[@id="items-search"]')

        await search.fill('*&&*');

        await expect(page.getByText('Ooops!')).toHaveText('Ooops!');

        await expect(page.getByText('Brand tidak ditemukan')).toHaveText('Brand tidak ditemukan');

        await page.close;
    });
});