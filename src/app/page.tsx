"use client"
import * as React from "react";
import Navbar from "./Navbar/Navbar"

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export default function App() {
    const background = 'public/background.svg'
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            <main className="dark text-foreground bg-mtn" >
                <Navbar/>
                <div className="p-4 bg-transparent">
                    <h1 className="text-4xl">Hello, world!</h1>
                </div>
            </main>
        </NextUIProvider>
    );
}