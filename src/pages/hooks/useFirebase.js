import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import initializeAuthentication from "../Login/Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})

    const auth = getAuth();

    const signInUsingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))

    }

    useEffect(() => {
        const unsbscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsbscribed
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { setUser({}) })
            .finally(() => setIsLoading(false))
    }



    return {
        signInUsingGoogle,
        isLoading,
        user,
        logOut
    }
};

export default useFirebase;