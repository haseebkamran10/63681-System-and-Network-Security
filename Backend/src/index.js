const app = require('./app');
const PORT = process.env.PORT || 45000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${process.env.BASE_URL || `http://${HOST}:${PORT}`}`);
});
