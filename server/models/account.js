import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
	username: String,
	password: String,
	created: { type: Date, default: Date.now }
});

export default mongoose.model('account', AccountSchema);
