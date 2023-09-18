import { Accessor, For, createSignal } from 'solid-js';
import './App.css';
import { Emoji } from './components/Emoji';
import { emojiType, emojiList } from './constants/emojis';
import { EmojiPopup } from './components/emojiPopup';

function App() {
    const [emojiSelected, setEmojiSelected] = createSignal<emojiType | null>(
        null,
    );

    return (
        <div class="flex gap-2 flex-wrap">
            <For each={Object.keys(emojiList)}>
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
    );
}

export default App;
