import mongoose from 'mongoose';

const MemoSchema = new mongoose.Schema({
	writer: String,
	contents: String,
	starred: [ String ],
	created: { type: Date, default: Date.now },
	edited: { type: Date, default: Date.now },
	is_edited: { type: Boolean, default: false }
});

export default mongoose.model('memo', MemoSchema);
