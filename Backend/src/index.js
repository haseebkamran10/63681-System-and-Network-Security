const app = require('./app');  
const PORT = process.env.PORT || 45000;  // Change the default port to 45000
const HOST = process.env.HOST || '0.0.0.0'; // Default to 0.0.0.0 for accessibility

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${process.env.BASE_URL || `http://${HOST}:${PORT}`}`);
});
