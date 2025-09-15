from flask import Flask, jsonify, request
from flask_cors import CORS
from utils import (
    get_lat_lon_from_pincode, 
    get_weather, 
    get_market_prices, 
    get_schemes, 
    get_knowledge_hub_news,
    recommend_crops
)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/")
def home():
    return jsonify({"message": "Welcome to Krishi Vikas API"})

# Weather route
@app.route("/weather", methods=["GET"])
def weather():
    pincode = request.args.get("pincode")
    if not pincode:
        return jsonify({"error": "Pincode is required"}), 400

    lat, lon = get_lat_lon_from_pincode(pincode)
    if lat is None or lon is None:
        return jsonify({"error": "Invalid pincode"}), 400

    weather_data = get_weather(lat, lon)
    return jsonify(weather_data)

# Market prices route
@app.route("/market-prices", methods=["GET"])
def market_prices():
    prices = get_market_prices()
    return jsonify(prices)

# Government schemes route
@app.route("/schemes", methods=["GET"])
def schemes():
    return jsonify(get_schemes())

# Knowledge Hub route
@app.route("/knowledge-hub", methods=["GET"])
def knowledge_hub():
    news = get_knowledge_hub_news()
    return jsonify(news)

# Crop recommendation route
@app.route("/recommend-crops", methods=["GET"])
def crops():
    recommended = recommend_crops()
    return jsonify(recommended)

if __name__ == "__main__":
    app.run(debug=True)

