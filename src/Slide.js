//rfc
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function Slide() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>


    )

}

export default Slide
