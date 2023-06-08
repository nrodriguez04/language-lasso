import { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const translateText = async () => {
    try {
      const response = await axios.post('http://localhost:5000/translate', { text });
      setTranslation(response.data.translated_text);
    } catch (error) {
      console.error('Failed to translate text:', error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <button onClick={translateText}>
        Translate
      </button>
      {translation && <p>{translation}</p>}
    </div>
  );
}

export default App;

