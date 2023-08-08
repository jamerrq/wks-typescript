import '../styles/Description.css';


const Description = (): JSX.Element => {
    return (
        <div className='appDescription'>
            <p>
                This is a pretty simple full stack app that allows you to
                create, read, update and delete users from an external database.
            </p>
            <p>
                For the front end, I used React and TypeScript.
                For the back end, I used Node.js, Express, and Postgres
                with Sequelize.
            </p>
            <p>
                The app is hosted on <a href='https://vercel.com/'> Vercel
                </a> and the database is hosted on <a
                    href='https://www.elephantsql.com/'>
                    ElephantSQL
                </a>
            </p>

            <p>To get started, click the "Fetch Users" button below.</p>
        </div>
    );
};


export default Description;
