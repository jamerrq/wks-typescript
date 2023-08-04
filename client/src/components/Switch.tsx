const Switch = ({ handleSwitch }: SwitchProps) => {

    return (
        <div className="container-switch">
            <label className="switch">
                <input type="checkbox" onChange={handleSwitch} />
                <span className="slider"></span>
            </label>
        </div>
    );

};


export default Switch;
