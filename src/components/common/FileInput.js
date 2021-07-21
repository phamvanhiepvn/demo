import React from "react";

const FileInput = ({value, onChange, ...rest}) => (
    <>
        <input
            {...rest}
            style={{display: "none"}}
            type="file"
            onChange={e => {
                onChange([...e.target.files]);
            }}
        />
    </>
);

export default FileInput;