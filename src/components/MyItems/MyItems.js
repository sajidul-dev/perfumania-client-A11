import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [userItem, setUserItem] = useState([])

    useEffect(() => {
        const email = user?.email
        const url = `https://secure-retreat-97587.herokuapp.com/myitems?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserItem(data))
    })
    return (
        <div>
            <h2>This is my items {userItem.length}</h2>
        </div>
    );
};

export default MyItems;