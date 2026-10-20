const PORT = 3000;
import express from "express"

const app = express();

app.get("/user", (req, res) => {
  return res.status(200).json({
    message: "morning guys"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
