# Vehicle-TELEMETRY-API-CURL

📦 Setup & Installation

Clone the repository (if applicable):
git clone <your-repo-url>
cd vehicle-telemetry-api

Install dependencies:
npm install
🚀 Running the Server

Start the API server by running:

node server.js
If successful, you should see:

Server running on http://localhost:3000
📡 Available API Endpoints

1. GET Static Telemetry Data
Returns a fixed set of vehicle telemetry values.

GET /api/telemetry/static
Example response:

{
  "vehicleId": "abc123",
  "timestamp": "2025-07-02T17:44:00.000Z",
  "speed": 45.2,
  "batteryLevel": 76,
  "brakeEngaged": false,
  "location": {
    "lat": 37.7749,
    "lng": -122.4194
  }
}
2. GET Dynamic Telemetry Data
Simulates changing telemetry values (e.g., random speed and battery).

GET /api/telemetry/dynamic
3. POST Test Vehicle ID Validation
Validates the vehicle ID sent in the request body.

POST /api/telemetry/test
Content-Type: application/json

{
  "vehicleId": "car001"
}
Using curl:

curl -X POST http://localhost:3000/api/telemetry/test \
  -H "Content-Type: application/json" \
  -d '{"vehicleId": "abc123"}'
🛠️ Notes

Make sure the server is running before making API calls.
The /dynamic endpoint will return new random values each time.
All timestamps are in ISO 8601 format.
