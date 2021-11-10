import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// initialize firebase
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //user registration
    const userRegister = (name, email, password) => {
        createUserWithEmailAndPassword(auth, name, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    // use Login
    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //user Login with Google pop up
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...

            }).catch((error) => {
                setError(error.message);
                // ...
            });
    }

    // observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            return () => unsubscribed;
        });
    }, [])

    // log Out user
    const logOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError(error.message);
            });
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