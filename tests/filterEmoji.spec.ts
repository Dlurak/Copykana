import { describe, it, expect } from "vitest";
import { filterEmoji } from "../src/components/emoji/filterEmoji";
import { emojiList } from "../src/constants/emoji"

describe('filterEmoji', () => {
    it('returns all emojis when no filter is provided', () => {
        expect(filterEmoji([])).toEqual(Object.keys(emojiList))
    });
    it('filters for emojis that match the filter', () => {
        const tableFiltered = filterEmoji(['table']);
        expect(tableFiltered).toContain('┬─┬ ノ( ゜-゜ノ)');
        expect(tableFiltered).toContain('(╯°□°）╯︵ ┻━┻');
        expect(tableFiltered).not.toContain('¯\\(°_o)/¯');

        const loveFiltered = filterEmoji(['love']);
        expect(loveFiltered).toContain('（╹◡╹）♡');
        expect(loveFiltered).not.toContain('╍●‿●╍');

        const coolFiltered = filterEmoji(['cool']);
        expect(coolFiltered).toContain('╍●‿●╍');
        expect(coolFiltered).not.toContain(':)');
    });
    it('filters with multiple tags', () => {
        const happyAndLaughFiltered = filterEmoji(['happy', 'laugh']);
        expect(happyAndLaughFiltered).toContain(':D');
        expect(happyAndLaughFiltered).toContain(':P');
        expect(happyAndLaughFiltered).not.toContain('( ͡° ͜ʖ ͡°)')
    });
    it('returns an empty array when no emoji matches the filter', () => {
        const happyAndSadFiltered = filterEmoji(['happy', 'sad']);
        expect(happyAndSadFiltered).toEqual([]);
    });
})