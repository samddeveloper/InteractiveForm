import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Importera cors-paketet
import router from './routes/routes.js';

const app = express();
const PORT = 3000;

app.use(cors()); // Använd cors middleware för att hantera CORS-problemet

app.use(express.json());
app.use('/', router);

mongoose.connect('mongodb+srv://admin:adminpassword@cluster0.gp3vmcp.mongodb.net/SynergyDB?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('!!!Connected to MongoDB!'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
