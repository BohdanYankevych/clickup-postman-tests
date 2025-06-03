import pytest
from clickup.api_client import *
from clickup.config import *

@pytest.fixture(scope="module")
def goal_object():
    # CREATE
    res = create_goal(" PyTest Goal")
    assert res.status_code == 200
    goal_id = res.json()["goal"]["id"]
    yield goal_id
    # DELETE
    del_res = delete_goal(goal_id)
    assert del_res.status_code == 200

def test_create_goal(goal_object):
    assert goal_object is not None

def test_get_created_goal(goal_object):
    res = get_goal(goal_object)
    assert res.status_code == 200
    assert res.json()["goal"]["id"] == goal_object

def test_update_goal(goal_object):
    res = update_goal(goal_object, "🧪 Updated Goal")
    assert res.status_code == 200
    assert res.json()["goal"]["name"] == "🧪 Updated Goal"

def test_invalid_token_get_goals():
    res = get_goals_with_invalid_token()
    assert res.status_code == 401

if __name__ == "__main__":
    pytest.main()