"use client"
import * as React from "react";



// 1. import `NextUIProvider` component
import { Card, CardBody, CardHeader, Link, NextUIProvider } from "@nextui-org/react";
import { Router } from "next/router";

export default function App() {
    const background = "public/background.svg"
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            <div className="flex h-[calc(100vh-64px)] justify-center p-6">
                <div className="flex justify-evenly flex-col w-max">
                    <div className="flex grow">

                    </div>
                    <div className="flex w-full">
                        <Card className="max-w-xs text-foreground bg-background font-serif">
                            <CardHeader>
                                <h2>
                                    Hi, I&apos;m Noah!
                                </h2>
                            </CardHeader>
                            <CardBody>
                                <p>Thank you for visiting my site! By the grace of God, 
                                    I make software for those called. See my <Link href="/about">about</Link> page for more information.</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="flex grow">

                    </div>
                    <div className="flex items-center justify-end h-auto min-w-screen-lg">
                        <Card className="text-foreground bg-background">
                            <CardBody className="font-serif">
                                <p>1 Kings 19:12

                                &quot;And after the earthquake a fire, but the LORD was not in the fire. And after the fire the sound of a low whisper.&quot; (ESV)</p>
                            </CardBody>
                        </Card>
                    </div>

                </div>
            </div>

        </NextUIProvider>
    );
}