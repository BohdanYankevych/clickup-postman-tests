#  ClickUp API Postman Tests – Advanced Task (V2)

Цей розділ репозиторію реалізує **друге завдання** – розширене тестування API ClickUp Lists з додатковими скриптами, валідацією та звітом.

---

## Що реалізовано

- 🔹 JSON Schema Validation (`tv4`) — для перевірки відповіді `GET /list/:id`
- 🔹 Pre-request script — автоматичне створення списку перед основним запитом
- 🔹 Post-request script — автоматичне видалення об'єкта після тесту
- 🔹 Вивід усіх `list.id` в Postman Console (`GET /folder/:id/list`)
- 🔹 Генерація **Newman HTML Report**

