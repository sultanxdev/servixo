# API Reference

## Base URL

```
Development: http://localhost:3001/api/v1
Production:  https://api.servixo.com/api/v1
```

## Authentication

Better Auth handles authentication at `/api/auth/*`.

All protected endpoints require a valid session cookie. The cookie is set automatically by Better Auth on sign-in.

## Response Format

### Success
```json
{
  "success": true,
  "message": "Request successful",
  "data": {}
}
```

### Error
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Invalid email address" }
  ]
}
```

### Paginated
```json
{
  "success": true,
  "message": "Request successful",
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

## HTTP Status Codes

| Code | Usage |
|------|-------|
| 200 | Success |
| 201 | Created |
| 400 | Validation error |
| 401 | Not authenticated |
| 403 | Insufficient permissions |
| 404 | Not found |
| 429 | Rate limited |
| 500 | Internal server error |

## Versioning

All API endpoints are versioned under `/api/v1/`. When breaking changes are introduced, a new version (e.g., `/api/v2/`) will be created.

## Endpoints

### Health
```
GET /api/v1/health
```
Returns server status. No authentication required.

### Authentication (Better Auth)
```
POST /api/auth/sign-up/email
POST /api/auth/sign-in/email
POST /api/auth/sign-out
GET  /api/auth/get-session
```

### Services (planned)
```
GET    /api/v1/services
GET    /api/v1/services/:id
POST   /api/v1/services          (admin)
PUT    /api/v1/services/:id      (admin)
DELETE /api/v1/services/:id      (admin)
```

### Plans (planned)
```
GET    /api/v1/plans
GET    /api/v1/plans/:id
POST   /api/v1/plans             (admin)
```

### Bookings (planned)
```
GET    /api/v1/bookings           (own/admin)
POST   /api/v1/bookings           (customer)
PATCH  /api/v1/bookings/:id/status
```

### Payments (planned)
```
POST   /api/v1/payments/create-order
POST   /api/v1/payments/verify
POST   /api/v1/payments/webhook    (Razorpay)
```

### PIN Codes (planned)
```
GET    /api/v1/pincodes/check/:pincode
GET    /api/v1/pincodes           (admin)
POST   /api/v1/pincodes           (admin)
```

## Naming Conventions

- Use kebab-case for URL paths.
- Use camelCase for JSON fields.
- Use plural nouns for resource collections.
- Use HTTP methods for actions (GET=read, POST=create, PUT=replace, PATCH=update, DELETE=remove).

## Error Handling

- All errors return a consistent JSON structure.
- Validation errors include per-field details.
- Production responses never expose stack traces or database internals.
- Rate limiting returns 429 with a `Retry-After` header where applicable.
