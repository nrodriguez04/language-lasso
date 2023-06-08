import { useState } from 'react';
import PropTypes from 'prop-types';

function TranslationForm({ onTranslate }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onTranslate(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <button type="submit">Translate</button>
    </form>
  );
}

TranslationForm.propTypes = {
  onTranslate: PropTypes.func.isRequired,
};

export default TranslationForm;

