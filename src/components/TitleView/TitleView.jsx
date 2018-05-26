
import React from 'react';
import './TitleView.css';

const TitleView = ({ firstName, role }) => {
    return (
        <div className="title-view-container">
            <h3>Welcome, {firstName}</h3>

            <div className="role-container">
                Role: {role}
            </div>
        </div>
    );
};

export default TitleView;