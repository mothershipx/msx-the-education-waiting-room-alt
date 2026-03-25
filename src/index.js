// The Education 'Waiting Room' Alternative (Direct-to-Work Bridge) — Entry point
// TODO: Build the core product logic

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ product: 'The Education 'Waiting Room' Alternative (Direct-to-Work Bridge)', status: 'pre-mvp' });
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`The Education 'Waiting Room' Alternative (Direct-to-Work Bridge) running on port ${PORT}`);
});
