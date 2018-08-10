import express from 'express';
import mongoose from 'mongoose';

const app = express();

const db = mongoose.connection;
db.on('error', console.error);
db.on('open', () => console.log('Connected to MongoDB Server...'));

mongoose.connect('mongodb://tester:test123@ds145951.mlab.com:45951/memopad_velopert', {
	useNewUrlParser: true
});

const server_port = 3000;

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(server_port, () => console.log(`Server is running on port ${server_port}`));
