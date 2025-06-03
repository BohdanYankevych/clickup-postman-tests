import json

with open("list.json", "r", encoding="utf-8") as file:
    data = json.load(file)

def find_lists(obj):
    results = []

    if isinstance(obj, dict):
        if "lists" in obj and isinstance(obj["lists"], list):
            results.extend(obj["lists"])
        for value in obj.values():
            results.extend(find_lists(value))
    elif isinstance(obj, list):
        for item in obj:
            results.extend(find_lists(item))

    return results

found_lists = find_lists(data)

print(" Знайдені lists:")
for lst in found_lists:
    list_id = lst.get("id")
    name = lst.get("name")
    print(f" ID: {list_id} |  Name: {name}")
