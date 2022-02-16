import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login/login';
import Account from './Account'

const HalamanSatu = () => {
    return <h1>Hello World</h1>;
}

const HalamanDua = () => {
    return <h1>Halaman Dua</h1>;
}

const App = () => {
    const [session, setSession] = useState(null)

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return(
        <div>
            {!session ? 
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<HalamanSatu />} />
                        <Route path="/HalamanDua" exact element={<HalamanDua />} />
                        <Route path="/login" exact element={<Login />} />
                    </Routes>
                </BrowserRouter>
                : <Account key={session.user.id} session={session} />
            }
        </div>
    );
};

export default App;