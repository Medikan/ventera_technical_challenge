import express from "express";
import path from "path";
import * as url from "url";

import { Convert } from "./src/helpers/conversionHelper.mjs";

const __dirname = url.fileURLToPath(import.meta.url);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../build")));

app.post("/api", (req, res) => {
  try {
    let { inputValue, inputMeasurement, targetMeasurement, targetValue } =
      req.body;

    let convertedValue = Convert(
      inputValue,
      inputMeasurement,
      targetMeasurement
    );

    convertedValue = Number(convertedValue).toFixed(1);
    targetValue = Number(targetValue).toFixed(1);

    let isMatch = convertedValue === targetValue;

    res.json({ isMatch, convertedValue, targetValue });
  } catch (ex) {
    res.status(500).send();
  }
});

app.get("*", (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
  } catch (ex) {
    console.log(`There was an error: ${ex}`);
    res.status(500).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
