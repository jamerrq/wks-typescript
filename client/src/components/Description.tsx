export default (): JSX.Element => {
    return (
        <div className='my-6 text-justify leading-normal font-karla w-1/2 justify-self-center select-none'>
            <p className="text-xl">
                <span
                    className="text-blue-400 display: inline-block font-bold text-2xl mb-2 mt-4 text-center w-full"
                > Welcome! </span>
                <br />
                This app is part of the <a
                    href="https://typescriptlang.org" target="_blank">
                    TypeScript
                </a> workshop at{" the "}
                <a href='https://www.soyhenry.com/' target="_blank">
                    Soy Henry
                </a> Full Stack Bootcamp.
                It allows you to create, read, update (soon) and delete users from an
                external database. <span className="text-blue-400">New! Now you
                can also filter and order the users by clicking the headers of
                some columns or typing input in the search bar.</span>
            </p>
            <p className="text-xl">
                For the front end, I used <a
                    href="https://www.typescriptlang.org/docs/handbook/react.html"
                    target="_blank">
                    TypeScript React
                </a> with <a target="_blank" href="https://tailwindcss.com">
                    Tailwind CSS</a>.
                For the back end, I used Node.js, Express, and Postgres
                with Sequelize.
            </p>
            <p className="text-xl">
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
            <p className="text-xl text-center">To get started, click the <span
                className="text-blue-400 display: inline-block"
            >
                Fetch Users</span> button below.</p>
        </div>
    );
};
