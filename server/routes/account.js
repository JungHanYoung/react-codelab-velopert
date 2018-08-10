import { Router } from 'express';
import Account from '../models/account';

const router = Router();

/**
 * POST /account/signup - 회원가입
 * BODY : username, password
 */
router.post('/signup', (req, res) => {
	if (!(req.body.username && req.body.password)) {
		return res.send('fail - 폼에 username, password가 포함되어 있지 않습니다.');
	}
	// username 4글자 이상이여야
	if (req.body.username.length < 4) {
		return res.send('fail - username은 4글자 이상이어야 합니다.');
	}

	// username 중복체크
	Account.findOne({ username: req.body.username }).then((account) => {
		if (account) {
			res.send('fail - 중복된 username 입니다.');
		} else {
			Account.create({
				username: req.body.username,
				password: req.body.password
			})
				.then((account) => {
					res.send('success');
				})
				.catch((err) => {
					console.error(err);
					res.send('fail - 데이터 저장 중 오류가 발생했습니다.');
				});
		}
	});
});
router.post('/signin', (req, res) => {
	res.send('POST signin');
});
router.post('/logout', (req, res) => {
	res.send('POST logout');
});

export default router;
