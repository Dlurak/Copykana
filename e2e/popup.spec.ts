import { test, expect } from '@playwright/test';
import { emojiList } from '../src/constants/emoji';

test('the popup opens and closes', async ({ page, context }) => {
    await page.goto('/');
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);

    const clipboardIsAvailable = await page.evaluate(() => navigator.clipboard !== undefined);
    const shareIsAvailable = await page.evaluate(() => navigator.share !== undefined);


    for (let i = 0; i < Math.min(Object.keys(emojiList).length, 5); i++) {
        const emoji = Object.keys(emojiList)[i];
        const emojiTags = emojiList[emoji] as string[];

        await page.getByText(emoji, { exact: true }).click();
        await page.waitForTimeout(800);

        // popup should be open //

        const smilleys = page.getByText(emoji, { exact: true });
        expect(await smilleys.count()).toBe(2);

        const popup =  page.locator('div').getByText(`${emoji}${emojiTags[0]}`);
        await expect(popup).toBeVisible();

        // tags should be shown //
        const tagIndicators = popup.locator('div').nth(1).locator('span')
        const allTagIndicators = await tagIndicators.all()

        expect(await tagIndicators.count()).toBe(emojiTags.length);
        // check that the tags are correct //
        for (const indicator of allTagIndicators) {
            const tag = (await indicator.innerText()).toLowerCase();
            expect(emojiTags.map((s) => s.toLowerCase())).toContain(tag);
        }

        if (clipboardIsAvailable) {
            await page.getByRole('button', { name: 'Copy' }).click();
            await expect(page.getByText('Copied!')).toBeVisible();

            const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
            expect(clipboardContent).toBe(`${emoji}`);
        }
        if (shareIsAvailable) {
            expect(await page.getByRole('button', { name: 'Share' }).isVisible()).toBe(true);
        }

        const closeButton = popup.getByRole('button').first();
        await closeButton.click();
        await page.waitForTimeout(200);
         expect(await popup.isVisible()).toBe(false);
         expect(await smilleys.count()).toBe(1);
    };
})
