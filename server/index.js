import express from 'express';
import mongoose from 'mongoose';

const app = express();

const db = mongoose.connection;
db.on('error', console.error);
db.on('open', () => console.log('Connected to MongoDB Server...'));

mongoose.connect('mongodb://tester:test123@ds145951.mlab.com:45951/memopad_velopert', {
	useNewUrlParser: true
});

// mongoose model
import Account from './models/account';
import Memo from './models/memo';

const server_port = 3000;

app.get('/', (req, res) => {
	res.send('hello');
});

app.post('/account', (req, res) => {
	Account.create({
		username: 'jhokta',
		password: '1234'
	})
		.then(() => {
			res.send('success');
		})
		.catch(() => {
			res.send('fail');
		});
});

app.post('/memo', (req, res) => {
	Memo.create({
		writer: 'jhokta',
		contents: '1234'
	})
		.then(() => {
			res.send('success');
		})
		.catch(() => {
			res.send('fail');
		});
});

app.listen(server_port, () => console.log(`Server is running on port ${server_port}`));
