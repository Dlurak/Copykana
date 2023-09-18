import { For, createSignal } from 'solid-js';
import { tag as tagType } from '../constants/emojis';

interface TagSelectorProps {
    tags: tagType[];
    onClick: (tag: tagType) => void;
}

interface TagSelectButtonProps {
    tag: tagType;
    onClick: (tag: tagType) => void;
}

const TagSelectButton = (props: TagSelectButtonProps) => {
    const [isSelected, setIsSelected] = createSignal(false);

    const normalBg =
        'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700';
    const selectedBg =
        'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600';

    return (
        <button
            class={`${
                isSelected() ? selectedBg : normalBg
            } p-1 rounded-sm transition-colors duration-300 ease-in-out`}
            onClick={() => {
                props.onClick(props.tag);
                setIsSelected(!isSelected());
            }}
        >
            {props.tag}
        </button>
    );
};

export const TagSelector = (props: TagSelectorProps) => {
    return (
        <div class="w-full overflow-x-scroll flex gap-2">
            <For each={props.tags}>
                {(item) => (
                    <TagSelectButton tag={item} onClick={props.onClick} />
                )}
            </For>
        </div>
    );
};
