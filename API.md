[//]: # "Тыкни сюда и нажми Ctrl + Shift + V в vscode чтобы смотреть отформатированную версию"

[< К заданию](./README.md)

# Tracks API

## Список треков с событиями

### [GET] `/tracks`

Возвращает список треков с событиями

### Success response

**Code 200**

```json
{
  "tracks": {
    "AS176810434CN": [
      {
        "id": events[1].id,
        "date": new Date(2020, 11, 13).valueOf()
      }
    ]
  }
}
```

Дата указана в миллисекундах с 1 января 1970 года в часовом поясе UTC

## Описание событий

### [GET] `/events`

Возвращает информацию о событиях по id

### Params

- `id = "cb017d76-0ca9-781b-4090-f05f5afad8bf"` (optional)
- `ids = ["cb017d76-0ca9-781b-4090-f05f5afad8bf", "afc501f4-b5f1-1f1e-cb76-cc7b1ca7b92b"]` (optional)

### Success response

Возвращает пустой массив, если события не найдены.

**Code 200**

```json
{
  "events": []
}
```

**Code 200**

```json
{
  "events": [
    {
      "id": "cb017d76-0ca9-781b-4090-f05f5afad8bf",
      "name": "Received"
    },
    {
      "id": "afc501f4-b5f1-1f1e-cb76-cc7b1ca7b92b",
      "name": "Sending"
    }
  ]
}
```
