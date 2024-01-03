const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  // Sending HTML response with centered content
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Centered Content</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .content {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="content">
        <h1>Hi, Haitham!</h1>
        <img src="/images/wal.png" alt="Sample Image" style="width: 300px; height: auto;" />
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
