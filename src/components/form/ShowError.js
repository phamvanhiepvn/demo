import React from "react";

const ShowError = (props) => {
    const {id = '', className = '', intl} = props
    return (
        <>
            <div className={className +" error"}>{intl.formatMessage({ id: id })}</div>
        </>
    )

};

export default ShowError;
