import { Accessor, For, createSignal } from 'solid-js';
import './App.css';
import { Emoji } from './components/Emoji';
import { emojiType, emojiList, tag, tags } from './constants/emojis';
import { EmojiPopup } from './components/emojiPopup';
import { TagSelector } from './components/TagSelector';

function App() {
    const [emojiSelected, setEmojiSelected] = createSignal<emojiType | null>(
        null,
    );
    const [selectedTags, setSelectedTags] = createSignal<tag[]>([]);
    const [filteredEmojiList, setFilteredEmojiList] = createSignal<emojiType[]>(
        Object.keys(emojiList) as emojiType[],
    );

    const toggleSelectedTag = (tag: tag) => {
        if (selectedTags().includes(tag)) {
            setSelectedTags(selectedTags().filter((item) => item !== tag));
        } else {
            setSelectedTags([...selectedTags(), tag]);
        }

        setFilteredEmojiList(
            Object.keys(emojiList).filter((emoji) => {
                return selectedTags().every((tag) => {
                    return emojiList[emoji as emojiType].includes(tag);
                });
            }) as emojiType[],
        );
    };

    return (
        <>
            <TagSelector tags={tags as any} onClick={toggleSelectedTag} />
            <hr class="mt-3 mb-4 rounded-full" />
            <div class="flex gap-2 flex-wrap">
                <For each={filteredEmojiList()}>
                    {(item) => (
                        <Emoji
                            emoji={item as emojiType}
                            onClick={setEmojiSelected}
                        />
                    )}
                </For>
                {emojiSelected() && (
                    <EmojiPopup emoji={emojiSelected as Accessor<emojiType>} />
                )}
            </div>
        </>
    );
}

export default App;
