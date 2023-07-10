import React from 'react';
import UserProfilecss from './UserProfile.module.scss';

const Profile =({name,username,pic})=>{
    return(
        <div className={UserProfilecss.profile}>
            <div className={UserProfilecss.pic}>
                <img src={pic} alt='profile pic'/>
            </div>
            <div className={UserProfilecss.profileInfo}>
                {/* <h3 style={{backgroundColor:'#D9D9D9'}}>{name}</h3> */}
                <h4 style={{backgroundColor:'#D9D9D9'}}>{username}</h4>
            </div>
        </div>
    );
};

export default Profile;