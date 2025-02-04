const express = require("express");
const db = require("./src/db/db");
const authRouter = require("./src/routes/auth");
const app = express();
const PORT = 3000;

app.use(express.json());

db.connect()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to the database: ", err);
  });

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
