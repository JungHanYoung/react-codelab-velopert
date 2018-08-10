import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
	res.send('write memo');
});

router.get('/', (req, res) => {
	res.send('show all memos');
});

router.delete('/:id', (req, res) => {
	res.send(`${req.params.id} memo is removed`);
});

router.put('/:id', (req, res) => {
	res.send(`${req.params.id} memo is modified`);
});

export default router;
