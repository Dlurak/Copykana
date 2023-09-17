import { For } from 'solid-js';
import './App.css';
import { Emoji } from './components/Emoji';
import { emojiList } from './constants/emojis';

function App() {
    return (
        <div class="flex gap-2 flex-wrap">
            <For each={emojiList}>{(item) => <Emoji emoji={item} />}</For>
        </div>
    );
}

export default App;
