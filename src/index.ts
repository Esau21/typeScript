import express, {Request, Response} from 'express';
import bookRoute from "./routes/bookRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Node.js + TypeScript")
});

app.use(express.json());

app.use("/api", bookRoute);

app.listen(PORT, () => {
    console.log(`Server is runnig in port ${PORT}`);
});