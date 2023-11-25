import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native'
import { auth } from "../config/firebase";

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            console.log('get user: ', user);
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            
        })
        return unsub;
    }, [])
    return { user }
}