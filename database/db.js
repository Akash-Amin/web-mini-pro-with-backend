import mongoose from 'mongoose';



const Connection = async () => {
   
    const URL='mongodb+srv://dbuser:akash6402@mini.bclgg.mongodb.net/mern_blog?retryWrites=true&w=majority';
     try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;