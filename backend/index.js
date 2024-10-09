import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
//model imports
import Message from './models/message.model.js';
import Vehicle from './models/vehicle.model.js';
import User from './models/user.model.js';
//util imports
// import { updateVehicles } from './utils/updateVehicles.js';
import updateVehicles from './utils/updateVehicles.js';
//import { deleteVehicles } from './utils/deleteVehicles.js';
//route imports
import vehicleRoutes from './routes/vehicle.routes.js';

//database initialization and connection
const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString)
  .then(() => {
    updateVehicles();
    console.log("Mongo connected and db updated.");
  })
  .catch(err => console.log(err));

//server initialization
const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.listen(port, () => {
    console.log(`node server running on ${port}`);
})

app.use(express.json());
app.use('/api/vehicles', vehicleRoutes);

//scheduled jobs
// cron.schedule('0 2 * * *', async () => {
//   console.log("Scheduled job - Refreshing vehicle data!");
//   updateVehicles();
// }, {
//   scheduled: true,
//   timezone: "America/Chicago"
// })


