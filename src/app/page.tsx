"use client"
import * as React from "react";
import Navbar from "./Navbar/Navbar"

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export default function App() {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            <main className="default-theme" >
                <Navbar />
            </main>
           
            
        </NextUIProvider>
    );
}