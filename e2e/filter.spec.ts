import { test, expect } from '@playwright/test';
import { filterEmoji } from '../src/components/emoji/filterEmoji';

test('the filter works', async ({ page }) => {
    await page.goto('/');

    const emojiButtons = page.locator('div').nth(2).locator('button');

    const filter = page.locator('div').first().locator('button');
    const allFilterButtons = await filter.all();
    for (const filterButton of allFilterButtons) {
        const filterButtonText = (await filterButton.innerText()).toLowerCase();
		// the favourite button has a special behaviour so skip it
		if (filterButtonText === 'favourite') continue;
		if (filterButtonText === '') continue;

        await filterButton.click();
        await page.waitForTimeout(200);

        const allEmojiButtons = await emojiButtons.all();
        const emojiButtonsText = await Promise.all(allEmojiButtons.map(async (button) => await button.innerText()));

        const filteredEmojisText = filterEmoji([filterButtonText])

        expect(emojiButtonsText).toEqual(filteredEmojisText);

        await filterButton.click();
    }
})
