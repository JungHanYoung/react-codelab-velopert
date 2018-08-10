import { Router } from 'express';

const router = Router();

router.post('/signup', (req, res) => {
	res.send('POST signup');
});
router.post('/signin', (req, res) => {
	res.send('POST signin');
});
router.post('/logout', (req, res) => {
	res.send('POST logout');
});

export default router;
