import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login/login';
import Account from './Account';
import Header from './menu/Header';
import Peternak from './dashboard/Peternak';
import InputPeternak from './dashboard/InputPeternak';
import DataBlockchain from './dashboard/DataBlockchain';

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
                <Login />
                : 
                <BrowserRouter>
                    <Header />
                    {/* <Account key={session.user.id} session={session} /> */}
                    <Routes>
                        <Route path="/" exact element={<HalamanSatu />} />
                        <Route path="/HalamanDua" exact element={<HalamanDua />} />

                        {/* Halaman Peternak */}
                        <Route path="/Peternak" exact element={<Peternak />} />
                        <Route path="/Peternak/Add" exact element={<InputPeternak />} />
                        <Route path="/Data-Blockchain" exact element={<DataBlockchain />} />
                    </Routes>
                </BrowserRouter>
            }
        </div>
    );
};

export default App;