from flask import Flask, jsonify, make_response, request
import requests
from dotenv import dotenv_values
from openai import OpenAI
from flask_cors import CORS

config = dotenv_values('.env')

app = Flask(__name__)

CORS(app, resources={
    r"/*": {"origins": ["http://localhost:5173"]}
})

openai = OpenAI(
    api_key = config['OPENAI_API_KEY']
)

@app.route("/translate", methods=["POST"])
def translate():
    req = request.get_json()
    
    if not req:
        return make_response(jsonify({
                "success":False,
                "error":"Invalid request."
            }, 400))
        
    language_codes = ['fr', 'sp', 'si']
    
    if 'language' not in req:
        return make_response(jsonify({
                "success":False,
                "error":"language paramter is required."
            }, 400)) 
    
    if req['language'] not in language_codes:
        return make_response(jsonify({
                "success":False,
                "error":"Invalid language code."
            }, 400)) 
        
    if 'text' not in req or req['text'] == '':
        return make_response(jsonify({
                "success":False,
                "error":"text paramter is required."
            }, 400)) 
    
        
    language_code = req['language']
    text = req['text']
    
    language = ""
    
    match language_code:
        case 'fr':
            language="French"
        case 'sp':
            language = "Spanish"
        case 'si':
            language = "Sinhala"
    
    data_raw = {
        "text": text,
        "language" :language
    }
    
    completion = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role":"system",
                "content":"Language translating expert. When text given in English need to translate that to Spanish, French or Sinhala. One of the given three languages will provide with the message."
            },
            {
                "role": "user",
                "content": f"{data_raw}"
            }
        ]
    )

    data = completion.choices[0].message.content
    
    return make_response({
        "success": True,
        "result": data
    })
    
    
if __name__ == "__main__":
    app.run(debug=True)