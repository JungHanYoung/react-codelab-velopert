import { Router } from 'express';
import Memo from '../models/memo';

const router = Router();

router.get('/', (req, res) => {
	Memo.find()
		.then((memos) => {
			res.send(memos);
		})
		.catch((err) => {
			console.error(err);
			res.send('fail - 데이터베이스 작업 중 오류가 발생했습니다.');
		});
});

router.use(sessionCheck);

router.post('/', (req, res) => {
	Memo.create({
		writer: req.session.logininfo.username,
		contents: req.body.contents
	})
		.then((memo) => {
			res.send(memo);
		})
		.catch((err) => {
			console.error(err);
			res.send('fail - 데이터베이스 작업 중 오류가 발생했습니다.');
		});
});

router.delete('/:id', exactUserCheck, (req, res) => {
	Memo.deleteOne({ _id: req.params.id })
		.then(() => {
			res.send('메모 삭제 성공');
		})
		.catch((err) => {
			console.error(err);
			res.send('fail - 데이터베이스 작업 중 오류가 발생했습니다.');
		});
});

router.put('/:id', exactUserCheck, (req, res) => {
	Memo.updateOne(
		{ _id: req.params.id },
		{
			contents: req.body.contents
		}
	)
		.then(() => {
			res.send('메모 수정 성공');
		})
		.catch((err) => {
			console.error(err);
			res.send('fail - 데이터베이스 작업 중 오류가 발생했습니다.');
		});
});

function sessionCheck(req, res, next) {
	if (req.session.logininfo) {
		if (req.session.logininfo.username && req.session.logininfo.id) {
			next();
		}
	} else {
		res.send('fail - 로그인을 하여야 이용하실 수 있습니다.');
	}
}

function exactUserCheck(req, res, next) {
	if (req.params.id) {
		Memo.findById(req.params.id).then((memo) => {
			if (req.session.logininfo.username === memo.writer) {
				next();
			} else {
				res.send('fail - 이 메모의 작성자만 할 수 있습니다.');
			}
		});
	} else {
		res.send('fail - `id` Path 파라미터가 없습니다');
	}
}

export default router;
