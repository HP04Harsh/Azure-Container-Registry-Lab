const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Node Js Testing/title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
      }

      body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #667eea, #764ba2);
        overflow: hidden;
      }

      /* Background blobs */
      .bg::before,
      .bg::after {
        content: "";
        position: absolute;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        filter: blur(100px);
        z-index: 0;
      }

      .bg::before {
        background: #ff6ec4;
        top: -100px;
        left: -100px;
      }

      .bg::after {
        background: #7873f5;
        bottom: -100px;
        right: -100px;
      }

      /* Glass Card */
      .glass-card {
        position: relative;
        z-index: 1;
        width: 360px;
        padding: 40px;
        border-radius: 20px;

        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);

        border: 1px solid rgba(255, 255, 255, 0.2);

        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

        text-align: center;
        color: white;
      }

      h1 {
        font-size: 28px;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
        margin-bottom: 20px;
        opacity: 0.85;
      }

      button {
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        cursor: pointer;

        background: rgba(255, 255, 255, 0.2);
        color: white;

        backdrop-filter: blur(10px);
        transition: 0.3s;
      }

      button:hover {
        background: rgba(255, 255, 255, 0.35);
      }
    </style>
  </head>

  <body>
    <div class="bg"></div>

    <div class="glass-card">
      <h1>🧊 Glass UI</h1>
      <p>Modern glassmorphism landing page using Node.js</p>
      <button onclick="alert('Welcome!')">Get Started</button>
    </div>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});