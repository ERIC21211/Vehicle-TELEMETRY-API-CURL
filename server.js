// server.js
const express = require('express');
const app = express();

// Middleware to parse JSON (optional, but useful)
app.use(express.json());

// Import telemetry routes
const telemetryRoutes = require('./routes/telemetry');

// Use telemetry routes under /api/telemetry
app.use('/api/telemetry', telemetryRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
