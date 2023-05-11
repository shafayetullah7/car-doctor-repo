import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const auth = getAuth(app);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logoutUser = ()=>{
        return signOut(auth);
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,current=>{
            if(current){
                setUser(current);
            }
            else{
                setUser(null)
            }
            setLoading(false);
        });

        return unsubscribe;
    },[])

    const authInfo ={
        user,
        createUser,
        loading,
        logoutUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;