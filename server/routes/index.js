import { Router } from 'express';
import MemoRoute from './memo';
import AccountRoute from './account';

const router = Router();

router.use('/memo', MemoRoute);
router.use('/account', AccountRoute);

export default router;
