import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: String,
	created: { type: Date, default: Date.now }
});

export default mongoose.model('account', AccountSchema);
