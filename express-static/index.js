const express = require('express');
const path = require('path');
const app = express();

const publicDirectoryPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicDirectoryPath);
app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
