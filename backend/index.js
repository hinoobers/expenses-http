import express from 'express';
import fs from "node:fs/promises";
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/expenses", async (req, res) => {
    const fileData = await fs.readFile("expenses.json", "utf-8");
    const parsed = JSON.parse(fileData);
    return res.json({expenses: parsed});
});

app.listen(3005, () => {
    console.log('Server is running on port 3005');
})