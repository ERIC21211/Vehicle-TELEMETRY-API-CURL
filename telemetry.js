const express = require('express');
const router = express.Router();


// Example route
router.get('/', (req, res) => {
  res.send('Telemetry data is working!');
});

// Add more telemetry-related routes here as needed

module.exports = router; // ✅ This makes it usable in server.js
// Reuse the WP3-compatible structure
const generateTelemetryPayload = (overrides = {}) => ({
  vehicleId: "abc123",
  timestamp: new Date().toISOString(),
  speed: 45.2,
  batteryLevel: 76,
  brakeEngaged: false,
  location: {
    lat: 37.7749,
    lng: -122.4194,
  },
  ...overrides,
});

router.get('/static', (req, res) => {
  const staticData = generateTelemetryPayload(); // static, WP3-compliant
  res.json(staticData);
});

router.get('/dynamic', (req, res) => {
  const dynamicData = generateTelemetryPayload({
    speed: Math.random() * 100,
    batteryLevel: Math.floor(Math.random() * 100),
    brakeEngaged: Math.random() < 0.5,
    location: {
      lat: 37.7749 + Math.random() * 0.01,
      lng: -122.4194 + Math.random() * 0.01,
    },
  });

  res.json(dynamicData);
});
