const express = require("express");

const app = express();
const PORT = 8383;

app.use(express.json());

let data = ["james"];

app.get("/", (req, res) => {
  res.send(
    ` <h1>
      Data: ${JSON.stringify(data)}
      <a href="/dashboard">dashboard</a>
    </h1>`
  );
});

app.get("/dashboard", (req, res) => {
  res.send(
    `<body>
        <h1>
          <p>this is dashboard</p>
          <a href="/">Home</a>
        </h1>
      
      </body>`
  );
});

app.post("/api/data", (req, res) => {
  const entryUser = req.body;
  data.push(entryUser.name);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  res.sendStatus(202);
});

app.listen(PORT, (req, res) => {
  console.log(`server has started at ${PORT}`);
});
