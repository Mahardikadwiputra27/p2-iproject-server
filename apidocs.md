# Cari Hotel Documentation

# Models

_User_

```
- email : string, required, unique
- password : string, required
```

_History_

```
- name :string, required
- UserId: integer, required
```

# Relations

### **One-to-Many**

# Endpoints

List of available endpoints:

- `POST /user/register`
- `POST /user/login`

Routes below need authentication:

- `GET /search/place`
- `GET /history`

# 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email must be input"
}

OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password must be input"
}
```

# 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email must be input"
}
OR
{
  "message": "Password must be input"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

# 3. GET /search/place

Request:

- body:

```json
{
  "location": "string"
}
```

_Response (200 - OK)_

```json
{
  "place": "object",
  "nearbyPlace": "object"
}
```

# 3. GET /history

_Response (200 - OK)_

```json
{
  "id": "integer",
  "name": "string",
  "UserId": "integer",
  "createdAt": "date",
  "updatedAt": "date"
}
```
