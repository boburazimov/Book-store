import React from "react";
import "./error-indicator.css"

const ErrorIndicator = ({error}) => {

    return (
        <div className='error-message'>Error is: {error.message}</div>
    )
};

export default ErrorIndicator;