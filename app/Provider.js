"use client";

import React from "react";
import Header from "./(components)/Header";
import { AppContextProvider } from "./(context)/AppContext";
import Footer from "./(components)/Footer";

function Provider({ children }) {
    return (
        <AppContextProvider>
            <Header />
            {children}
            <Footer />
        </AppContextProvider>
    );
}

export default Provider;
