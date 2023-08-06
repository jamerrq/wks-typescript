import '../styles/Footer.css';


// React Icons
import { IconContext } from 'react-icons';
import { TbPlus, TbBrandVite, TbBrandTypescript } from 'react-icons/tb/';
import { BsGithub } from 'react-icons/bs';
import { SiPostgresql } from 'react-icons/si';


const ownStyle = (icon?: JSX.Element) => (
    <IconContext.Provider value={{ className: "footerIcons", size: "1.35em" }}>
        {icon}
    </IconContext.Provider>
);


const Footer = (): JSX.Element => {
    const squareSize = '1.35em';
    return (
        <footer>
            Full Stack App created by&nbsp;
            <a href="https://github.com/jamerrq"
                target='_blank'
                className='footerIcons'
                aria-label='github'
            >
                @jamerrq
            </a>&nbsp;using&nbsp;
            <a href="https://typescriptlang.org"
                target='_blank'
                className='footerIcons'
                aria-label='typescript'
            >
                {ownStyle(<TbBrandTypescript
                    width={squareSize} height={squareSize} />)}
            </a>
            &nbsp; <TbPlus /> &nbsp;
            <a href="https://vitejs.dev"
                target='_blank'
                className='footerIcons'
                aria-label='vite'
            >
                {ownStyle(<TbBrandVite />)}
            </a>
            &nbsp; <TbPlus /> &nbsp;
            <a href="https://postgresql.org"
                target='_blank'
                className='footerIcons'
                aria-label='postgresql'
            >
                {ownStyle(<SiPostgresql />)}
            </a>
            &nbsp; take a look at the repo here:&nbsp;
            <a
                href="https://github.com/jamerrq/wks-typescript"
                target='_blank'
                className='footerIcons'
                aria-label='github repo'
            >
                {ownStyle(<BsGithub />)}
            </a>
        </footer>
    );
};


export default Footer;
