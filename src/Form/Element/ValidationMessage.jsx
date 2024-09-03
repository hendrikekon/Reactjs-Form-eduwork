import React from 'react';

class ValidationMessages extends React.Component {
    render() {
        const { errors } = this.props;
        if (!errors || errors.length === 0) {
            return null;
        }
        return (
            <div className="alert alert-danger">
                <ul>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ValidationMessages;
