// Application Initialization and Module Dependencies
import mongoose from 'mongoose';
import config from '../Config';

mongoose.connect(config.database);
const db = mongoose.connection;
export default db;