import { emojiType } from '../constants/emojis';

interface EmojiProps {
    emoji: emojiType;
    onClick?: (emoji: emojiType) => void;
}

export const Emoji = (props: EmojiProps) => {
    return (
        <button
            class="flex justify-between gap-2 p-2 rounded-md bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out"
            onClick={() => {
                if (props.onClick) {
                    console.log(props.emoji);
                    props.onClick(props.emoji);
                }
            }}
        >
            <p class="inline">{props.emoji}</p>
        </button>
    );
};
