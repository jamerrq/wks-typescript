import '../styles/Footer.css';


// React Icons
import { IconContext } from 'react-icons';
import { TbPlus, TbBrandVite, TbBrandReact } from 'react-icons/tb/';
import { BsGithub } from 'react-icons/bs';
import { BiLogoPostgresql, BiLogoTypescript, } from 'react-icons/bi';


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
                {ownStyle(<BiLogoTypescript
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
            &nbsp; <a href="https://react.dev/"
                target='_blank'
                className='footerIcons'
                aria-label='vite'
            >
                {ownStyle(<TbBrandReact />)}
            </a>
            &nbsp; <TbPlus /> &nbsp;
            <a href="https://postgresql.org"
                target='_blank'
                className='footerIcons'
                aria-label='postgresql'
            >
                {/* {ownStyle(<SiPostgresql />)} */}
                {ownStyle(<BiLogoPostgresql />)}
            </a>
            &nbsp; take a look at the repository here:&nbsp;
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
