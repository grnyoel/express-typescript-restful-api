import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Gerent' },
  { id: 2, name: 'Viole' }
];

// GET
app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

// POST
app.post('/users', (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required bro' });
  }

  const newUser: User = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello bro, wkwk siuuu');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});