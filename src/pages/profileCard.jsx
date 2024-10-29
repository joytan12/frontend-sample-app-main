import React from 'react';


const ProfileCard = ({ title, image, description }) => {
    return (
        <div className="profile-card">
            <h2 className="profile-card-title">{title}</h2>
            <div className="profile-card-content">
                <img src={image} alt="profile" className="profile-card-image" />
                <p className="profile-card-description">{description}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
