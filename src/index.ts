import express from "express";
import bookRoutes from "./routes/bookRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
