const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Podman Deployment Visualization</title>
        <style>
          body { font-family: Arial; text-align: center; background-color: #eef6fd; }
          h1 { color: #1f618d; }
          .flow-container { display: flex; justify-content: center; align-items: center; margin-top: 50px; }
          .box { border: 2px solid #1f618d; border-radius: 10px; padding: 20px; margin: 10px; width: 180px; height: 120px; background-color: #fff; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);}
          .arrow { font-size: 40px; margin: 0 10px; }
          p { margin-top: 10px; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>🚀 Podman Deployment Flow</h1>
        <div class="flow-container">
          <div class="box">
            App Code
            <p>app.js + package.json</p>
          </div>
          <div class="arrow">➡️</div>
          <div class="box">
            Podman Image
            <p>mywebapp:latest</p>
          </div>
          <div class="arrow">➡️</div>
          <div class="box">
            Container
            <p>Running on port 8080</p>
          </div>
          <div class="arrow">➡️</div>
          <div class="box">
            Browser
            <p>http://localhost:8080</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
