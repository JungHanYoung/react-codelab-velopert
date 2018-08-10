import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const AccountSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: String,
	created: { type: Date, default: Date.now }
});

AccountSchema.pre('save', function(next) {
	bcrypt.hash(this.password, 10).then((hashedPassword) => {
		this.password = hashedPassword;
		next();
	});
});

AccountSchema.method({
	comparePassword: function(password) {
		return bcrypt.compareSync(password, this.password);
	}
});

export default mongoose.model('account', AccountSchema);
