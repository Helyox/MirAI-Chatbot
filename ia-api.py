import os
from flask import Flask, request, jsonify
import requests

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def index():
        return open('templates/index.html').read()

    @app.route('/get_value', methods=['POST'])
    def get_value():
        data = request.get_json()
        message = data.get('message')
        print("Message from JavaScript:", message)

        if message != "":
            headers = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDNkOWYzNDctYzkwYi00MTE5LTg2NDEtOTI4ZmMzMWEwNTIzIiwidHlwZSI6ImFwaV90b2tlbiJ9.gGzGyt6VIr2MPAJrEKClFBzkVSkQFOvWeCTXYHfaDs8"}
            url = "https://api.edenai.run/v2/text/chat"
            payload = {
                "providers": "openai",
                "text": message,
                "chatbot_global_action": "Act as an assistant, your Name is MirAI",
                "previous_history": [],
                "temperature": 0.0,
                "max_tokens": 150,
            }
            response = requests.post(url, json=payload, headers=headers)

            result = response.json()
            generated_text = result['openai']['generated_text']
            print(generated_text)  # Affichez la valeur générée
            return jsonify(generated_text)

        else:
            print("message vide de l'utilisateur")

    return app

if __name__ == '__main__':
    app = create_app()
    # Utilisation de la variable d'environnement PORT ou le port 8080 par défaut
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
