import PropTypes from 'prop-types';

function TranslationResult({ translation }) {
  return translation && <p>{translation}</p>;
}

TranslationResult.propTypes = {
  translation: PropTypes.string,
};

export default TranslationResult;
