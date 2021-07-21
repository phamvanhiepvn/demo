import React from "react";

const InputWithIcon = (props) => {
    const {id = '', icon, label, error, errorClass ='pl-8', name, col} = props
    return (
        <>
            <div className={"input-field col "+col}>
                <i className="material-icons prefix pt-2">{icon}</i>
                <input {...props} className="form-control"/>
                <div className="wrapper-error">
                    <div id={error+id} className={"error "+ errorClass}>{error}</div>
                </div>
                <label htmlFor={name} className="center-align">{label}</label>

            </div>
        </>
    )

};

export default InputWithIcon;
