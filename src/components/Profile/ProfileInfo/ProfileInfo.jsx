import React from 'react';
import './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className='content'>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;