import '../styles/Switch.css';


const Switch = ({ handleSwitch }: SwitchProps) => {

    return (
        <div className="container-switch">
            <label className="switch">
                <label htmlFor="dark-mode-switch">Dark Mode</label>
                <input id="dark-mode-switch" type="checkbox" onChange={handleSwitch} />
                <span className="slider"></span>
            </label>
        </div>
    );

};


export default Switch;
