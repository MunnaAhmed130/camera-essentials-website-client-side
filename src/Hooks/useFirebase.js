import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut
} from "firebase/auth";
import axios from 'axios';

// initialize firebase
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //user registration
    const userRegister = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to the database
                saveUser(email, name);
                console.log(user)
                // update firebase profile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                history.replace('/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // use Login
    const userLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || '/';
                history.push(destination);
                setError('');
                console.log(user)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //user Login with Google pop up
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveGoogleUser(user.email, user.displayName)
                const destination = location?.state?.from || '/';
                history.push(destination);
                setError('');
            }).catch((error) => {
                setError(error.message);
                // ...
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // log Out user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        axios.post('http://localhost:4000/users', user)
            .then()
    }
    const saveGoogleUser = (email, displayName) => {
        const user = { email, displayName };
        axios.put('http://localhost:4000/users', user)
            .then()
    }
    return {
        user,
        error,
        isLoading,
        userRegister,
        userLogin,
        googleSignIn,
        logOut
    }
};

export default useFirebase;