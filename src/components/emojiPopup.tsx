import { Accessor, For } from 'solid-js';
import { emojiType, tag, emojiList } from '../constants/emojis';
import { CopyButton, ShareButton } from './shareButton';

interface EmojiPopupProps {
    emoji: Accessor<emojiType>;
    close: () => void;
}

const getTagsByEmoji = (emoji: emojiType): tag[] => {
    return emojiList[emoji];
};

export const EmojiPopup = (props: EmojiPopupProps) => {
    return (
        <div class="fixed bottom-2 right-2 bg-slate-200 dark:bg-slate-800 p-4 rounded-md shadow-2xl max-w-full flex flex-col gap-3 items-stretch">
            <div class="flex justify-between items-center gap-2">
                <h3>{props.emoji()}</h3>
                <button onClick={props.close}>X</button>
            </div>
            <div class="flex gap-2">
                <CopyButton text={props.emoji()} />
                <ShareButton text={props.emoji()} />
            </div>
            <div class="flex gap-1 flex-wrap">
                <For each={getTagsByEmoji(props.emoji())}>
                    {(item) => (
                        <span class="inline-block bg-slate-300 dark:bg-slate-700 rounded-sm p-2 flex-1">
                            {item}
                        </span>
                    )}
                </For>
            </div>
        </div>
    );
};
