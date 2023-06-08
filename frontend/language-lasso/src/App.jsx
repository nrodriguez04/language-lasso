import { useState } from 'react';
import axios from 'axios';
import './App.css';
import TranslationForm from './components/TranslationForm';
import TranslationResult from './components/TranslationResult';

function App() {
  const [translation, setTranslation] = useState('');

  const translateText = async (text) => {
    try {
      const response = await axios.post('http://localhost:5000/translate', { text });
      setTranslation(response.data.translated_text);
    } catch (error) {
      console.error('Failed to translate text:', error);
    }
  };

  return (
    <div>
      <h1>Language Lasso</h1>
      <h3>The AI language translation app</h3>
      <TranslationForm onTranslate={translateText} />
      <TranslationResult translation={translation} />
    </div>
  );
}

export default App;
