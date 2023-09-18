interface ShareProps {
    text: string;
}

const basicButtonStyle =
    'p-2 w-full flex-1 rounded-sm bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors duration-300 ease-in-out';

const canShare = navigator.share !== undefined;

/**
 * A button to share text using the native share API
 * @param props The text to share
 * @returns A button to share the text, if the share API isn't available, returns null
 */
export const ShareButton = (props: ShareProps) => {
    if (canShare) {
        return (
            <button
                class={basicButtonStyle}
                onClick={() => {
                    navigator.share({
                        text: props.text,
                    });
                }}
            >
                Share
            </button>
        );
    }

    return null;
};

/**
 * A button to copy text to the clipboard
 * @param props The text to copy
 * @returns A button to copy the text
 */
export const CopyButton = (props: ShareProps) => {
    return (
        <button
            class={basicButtonStyle}
            onClick={() => {
                navigator.clipboard.writeText(props.text);
            }}
        >
            Copy
        </button>
    );
};
