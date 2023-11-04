import { test, expect } from '@playwright/test';
import { filterEmoji } from '../src/components/emoji/filterEmoji';

test('the filter works', async ({ page }) => {
    await page.goto('/');

    const emojiButtons = await page.locator('div').nth(1).locator('button');

    const filter = await page.locator('div').first().locator('button');
    const allFilterButtons = await filter.all();
    for (const filterButton of allFilterButtons) {
        const filterButtonText = (await filterButton.innerText()).toLowerCase();
        await filterButton.click();
        await page.waitForTimeout(200);

        const allEmojiButtons = await emojiButtons.all();
        const emojiButtonsText = await Promise.all(allEmojiButtons.map(async (button) => await button.innerText()));
        const filteredEmojisText = filterEmoji([filterButtonText])

        await expect(emojiButtonsText).toEqual(filteredEmojisText);

        await filterButton.click();
    }
})
