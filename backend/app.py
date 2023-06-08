from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    text_to_translate = data['text']
    source_lang = data['source_lang']
    target_lang = data['target_lang']

    # Here you would actually call OpenAI's API to translate the text
    translated_text = call_openai_api(text_to_translate, source_lang, target_lang)

    return jsonify({'translated_text': translated_text})

def call_openai_api(text_to_translate, source_lang, target_lang):
    openai.api_key = 'your-api-key'

    response = openai.Completion.create(
      engine="text-davinci-003",
      prompt=f"Translate the following {source_lang} text to {target_lang}: {text_to_translate}",
      max_tokens=60
    )

    return response.choices[0].text.strip()

if __name__ == '__main__':
    app.run(debug=True)

import sys
print(sys.path)
