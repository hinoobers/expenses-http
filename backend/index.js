import express from 'express';
import fs from "node:fs/promises";
import cors from 'cors';
import exp from 'node:constants';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/expenses", async (req, res) => {
    const fileData = await fs.readFile("expenses.json", "utf-8");
    const parsed = JSON.parse(fileData);
    return res.json({expenses: parsed});
});

app.post("/add-expense", async (req, res) => {
    const expData = req.body.expense;
    console.log(req.body);
    const newData = {
        ...expData,
        id: (Math.random() * 1000).toString()
    }
    const fileData = await fs.readFile("expenses.json", "utf-8");
    const parsed = JSON.parse(fileData);
    parsed.push(newData);
    await fs.writeFile("expenses.json", JSON.stringify(parsed));
    return res.status(201).json({message: "Expense added successfully"});
});

app.listen(3005, () => {
    console.log('Server is running on port 3005');
})