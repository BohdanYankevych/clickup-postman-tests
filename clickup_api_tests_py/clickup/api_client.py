import requests
from clickup.config import BASE_URL, HEADERS, TEAM_ID

def create_goal(name):
    url = f"{BASE_URL}/goal"
    payload = {
        "name": name,
        "team_id": TEAM_ID,
        "due_date": 9999999999999,
        "description": "Test goal"
    }
    return requests.post(url, headers=HEADERS, json=payload)

def get_goal(goal_id):
    return requests.get(f"{BASE_URL}/goal/{goal_id}", headers=HEADERS)

def update_goal(goal_id, new_name):
    payload = {"name": new_name}
    return requests.put(f"{BASE_URL}/goal/{goal_id}", headers=HEADERS, json=payload)

def delete_goal(goal_id):
    return requests.delete(f"{BASE_URL}/goal/{goal_id}", headers=HEADERS)

def get_goals():
    return requests.get(f"{BASE_URL}/goal?team_id={TEAM_ID}", headers=HEADERS)

def get_goals_with_invalid_token():
    headers = {"Authorization": "Bearer INVALID_TOKEN"}
    return requests.get(f"{BASE_URL}/goal?team_id={TEAM_ID}", headers=headers)