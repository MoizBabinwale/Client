import React from 'react';

export const Alert = ({ type, message }) => {
    let alertClasses = 'px-4 py-2 rounded-md mb-4';

    // Dynamically set classes based on the alert type
    switch (type) {
        case 'error':
            alertClasses += ' bg-red-500 text-white';
            break;
        case 'success':
            alertClasses += ' bg-green-500 text-white';
            break;
        case 'warning':
            alertClasses += ' bg-yellow-500 text-white';
            break;
        default:
            alertClasses += ' bg-gray-500 text-white';
    }

    return (
        <div className={alertClasses} role="alert">
            {message}
        </div>
    );
};

