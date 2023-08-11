// React Icons
import { IconContext } from 'react-icons';
import { TbPlus, TbBrandVite, TbBrandReact } from 'react-icons/tb/';
import { BsGithub } from 'react-icons/bs';
import { BiLogoPostgresql, BiLogoTypescript, } from 'react-icons/bi';
import { SiTailwindcss, SiExpress, SiSequelize } from 'react-icons/si';


const ownStyle = (icon?: JSX.Element) => (
    <IconContext.Provider value={{ className: "text-blue-400 hover:scale-125 hover:drop-shadow-[0_0_1px_#cdd7e0]", size: "1.2em" }}>
        {icon}
    </IconContext.Provider>
);


export default (): JSX.Element => {
    const squareSize = '1.35em';
    return (
        <footer className="w-full fixed flex justify-center text-[--footer-font] py-1 bottom-0 items-center font-karla bg-[--footer] border-t border-[--border] space-x-0.5">
            Full Stack App created by&nbsp;
            <a href="https://github.com/jamerrq"
                target='_blank'
                className='text-blue-400 hover:scale-105 hover:drop-shadow-[0_0_1px_#cdd7e0] hover:text-[--accent]'
                aria-label='github'
                data-title='Github Profile'
            >
                @jamerrq
            </a>&nbsp;using&nbsp;
            <a href="https://typescriptlang.org"
                target='_blank'
                className='footerIcons'
                aria-label='typescript'
                data-title='TypeScript'
            >
                {ownStyle(<BiLogoTypescript
                    width={squareSize} height={squareSize} />)}
            </a>
            &nbsp; <TbPlus /> &nbsp;
            <a href="https://vitejs.dev"
                target='_blank'
                className='footerIcons'
                aria-label='vite'
                data-title='Vite 4'
            >
                {ownStyle(<TbBrandVite />)}
            </a>
            &nbsp; <a href="https://react.dev/"
                target='_blank'
                className='footerIcons'
                aria-label='vite'
                data-title='React'
            >
                {ownStyle(<TbBrandReact />)}
            </a>
            &nbsp; <a href="https://tailwindcss.com"
                target='_blank'
                className='footerIcons'
                aria-label='tailwindcss'
                data-title='Tailwind CSS'
            >
                {ownStyle(<SiTailwindcss />)}
            </a>
            &nbsp; <TbPlus /> &nbsp;
            <a href="https://expressjs.com"
                target='_blank'
                className='footerIcons'
                aria-label='express'
                data-title='Express'
            >
                {ownStyle(<SiExpress />)}
            </a>
            &nbsp; <a href="https://sequelize.org"
                target='_blank'
                className='footerIcons'
                aria-label='sequelize'
                data-title='Sequelize'
            >
                {ownStyle(<SiSequelize />)}
            </a>
            &nbsp; <a href="https://postgresql.org"
                target='_blank'
                className='footerIcons'
                aria-label='postgresql'
                data-title='PostgreSQL'
            >
                {/* {ownStyle(<SiPostgresql />)} */}
                {ownStyle(<BiLogoPostgresql />)}
            </a>
            &nbsp; take a look at the repository here&nbsp;
            <a
                href="https://github.com/jamerrq/wks-typescript"
                target='_blank'
                className='footerIcons'
                aria-label='github repo'
                data-title='Github Repository'
            >
                {ownStyle(<BsGithub />)}
            </a>
        </footer>
    );
};
