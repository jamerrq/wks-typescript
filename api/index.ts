import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();
import { sequelize } from './src/db';


const port = process.env.API_PORT || 3001;
sequelize.sync({ force: true, logging: false }).then(async () => {
    await sequelize.authenticate();
    console.log('Database connected! :D');
    app.listen(port, () => {
        console.log(`App is listening on port ${port}`);
    });
}).catch((err: Error) => {
    console.log('Error connecting to database: ', err);
});
