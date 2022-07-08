const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT ?? 4200;
const app = express();

app.use(express.json({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/getter", require("./routes/data_processing"));

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
