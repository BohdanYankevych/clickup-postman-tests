import os
from dotenv import load_dotenv

load_dotenv()

API_TOKEN = os.getenv("CLICKUP_API_TOKEN")
TEAM_ID = os.getenv("CLICKUP_TEAM_ID")
BASE_URL = os.getenv("BASE_URL")

HEADERS = {
    "Authorization": API_TOKEN,
    "Content-Type": "application/json"
}