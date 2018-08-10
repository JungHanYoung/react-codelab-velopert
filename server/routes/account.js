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
	Account.findOne({ username: req.body.username })
		.then((account) => {
			// 폼의 username에 해당하는 회원정보 유무 체크
			if (!account) {
				res.send('fail - 해당 username의 회원정보는 없습니다.');
			} else {
				// 비밀번호 체크
				if (account.password === req.body.password) {
					req.session.logininfo = {
						id: account.id,
						username: account.username
					};
					res.send('로그인 성공**');
				} else {
					res.send('fail - 비밀번호가 틀립니다.');
				}
			}
		})
		.catch((err) => {
			console.error(err);
			res.send('fail - 데이터베이스 작업 중 오류가 발생했습니다.');
		});
});

router.get('/logininfo', (req, res) => {
	res.send(req.session.logininfo);
});

router.post('/logout', (req, res) => {
	req.session.destroy(console.error);
	res.send('POST logout');
});

export default router;
