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
                The client side is hosted on <a
                    href='https://vercel.com/' target="_blank">Vercel
                </a> and the database is hosted on <a
                    href='https://www.elephantsql.com/' target="_blank">
                    ElephantSQL
                </a> while the server is hosted on <a
                    href='https://dashboard.render.com/' target="_blank">
                    Render
                </a>.
            </p>
            <br></br>
            <p>To get started, click the <span style={{
                color: "var(--tscolor)",
                display: "inline-block"
            }}>Fetch Users</span> button below.</p>
        </div>
    );
};


export default Description;
