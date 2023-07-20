import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();


const port = process.env.API_PORT || 3001;
app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
});
