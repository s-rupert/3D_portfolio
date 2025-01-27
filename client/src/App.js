const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/static', express.static(path.join(__dirname, 'Logos')));

// Serve the React index.html for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
