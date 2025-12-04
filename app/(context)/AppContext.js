"use client";

import { dummyProducts } from '@/public/data';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppContextProvider({ children }) {
    const currency = "$";
    const [products, setProducts] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const router = useRouter();  

    useEffect(() => {
        try {
            setProducts(dummyProducts);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const value = {
        products,
        subTotal,
        setSubTotal,
        totalAmount,
        setTotalAmount,
        currency,
        router 
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
