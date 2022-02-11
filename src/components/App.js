import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const HalamanSatu = () => {
    return <h1>Hello World</h1>;
}

const HalamanDua = () => {
    return <h1>Halaman Dua</h1>;
}

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HalamanSatu />} />
                    <Route path="/HalamanDua" exact element={<HalamanDua />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;