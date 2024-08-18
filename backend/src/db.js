import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		await mongoose.connect(process.env.URI_MONGO);
    console.log('>>> DB is connected <<<');
    
	} catch (error) {
		console.log('Error connecting to DB:', error);
	}
};
