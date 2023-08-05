import '../styles/Footer.css';
import TsLogo from '../icons/TsLogo';
import GitLogo from '../icons/GitLogo';


const Footer = (): JSX.Element => {
    const squareSize = '1.2em';
    return (
        <footer>
            Full Stack App created by&nbsp;
            <a href="https://github.com/jamerrq" target='_blank'>
                @jamerrq
            </a>&nbsp;using&nbsp;
            <a href="https://typescriptlang.org" target='_blank'>
                <TsLogo width={squareSize} height={squareSize} fill="#3178c6" />
            </a>
            &nbsp;checkout the repo here ⟶&nbsp;
            <a href="https://github.com/jamerrq/wks-typescript" target='_blank'>
                <GitLogo width={squareSize} height={squareSize} fill="#3178c6" />
            </a>
        </footer>
    );
};


export default Footer;
