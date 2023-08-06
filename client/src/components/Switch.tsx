import '../styles/Switch.css';


const Switch = ({ handleSwitch, labelContent }: SwitchProps) => {

    return (
        <div className="container-switch">
            <label className="switch">
                <label htmlFor="dark-mode-switch">{labelContent}</label>
                <input
                    id="dark-mode-switch"
                    type="checkbox"
                    onChange={handleSwitch}
                // checked={theme === "black"}
                />
                <span className="slider"></span>
            </label>
        </div>
    );

};


export default Switch;
