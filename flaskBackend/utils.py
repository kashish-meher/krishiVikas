import requests
import pandas as pd
from geopy.geocoders import Nominatim

WEATHER_API_KEY = "4f7ef8238a484e53f371def3210dfce7"

def get_lat_lon_from_pincode(pincode):
    geolocator = Nominatim(user_agent="krishi_vikas")
    location = geolocator.geocode(pincode)
    if location:
        return location.latitude, location.longitude
    return None, None

def get_weather(lat, lon):
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={WEATHER_API_KEY}&units=metric"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return {
            "temperature": data["main"]["temp"],
            "description": data["weather"][0]["description"],
            "humidity": data["main"]["humidity"],
            "wind_speed": data["wind"]["speed"]
        }
    else:
        return {"error": "Unable to fetch weather data"}

def get_market_prices():
    df = pd.read_csv("market_prices.csv")
    latest_date = df['date'].max()
    latest_prices = df[df['date'] == latest_date].to_dict(orient="records")
    return latest_prices

def get_schemes():
    schemes = [
        {
            "title": "PM Kisan Samman Nidhi",
            "description": "Income support of Rs. 6000 per year to all small and marginal farmers.",
            "link": "https://pmkisan.gov.in/"
        },
        {
            "title": "Pradhan Mantri Fasal Bima Yojana",
            "description": "Crop insurance scheme providing coverage and financial support to farmers in case of crop failure.",
            "link": "https://pmfby.gov.in/"
        },
        {
            "title": "Soil Health Card Scheme",
            "description": "Provides soil testing and recommendations for better crop yield.",
            "link": "https://soilhealth.dac.gov.in/"
        }
    ]
    return schemes

def get_knowledge_hub_news():
    # Dummy news / knowledge hub data
    news = [
        {"title": "New Fertilizer Subsidy Released", "link": "https://www.example.com/news1"},
        {"title": "Government Launches Organic Farming Initiative", "link": "https://www.example.com/news2"},
        {"title": "Irrigation Techniques to Boost Yield", "link": "https://www.example.com/news3"}
    ]
    return news

def recommend_crops():
    prices = get_market_prices()
    # Recommend top 3 profitable/high price vegetables
    sorted_prices = sorted(prices, key=lambda x: x['price'], reverse=True)
    recommended = sorted_prices[:3]
    return recommended
