import express from 'express';

const app = express();

const server_port = 3000;

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(server_port, () => console.log(`Server is running on port ${server_port}`));
