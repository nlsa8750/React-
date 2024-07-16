import React, {useContext, useState} from 'react';
import UserContext from '../context/UserContext';

// to receive the data from the login portion
function Profile () {

    const {user} = useContext(UserContext);

        if(!user) return <div>Login kar lijiye , bata rahe hai hum</div>

        return <div>WELCOME TO THE PAGE, {user.username}</div>

}

export default Profile;