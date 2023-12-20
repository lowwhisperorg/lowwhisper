import { Card, CardHeader } from "@nextui-org/react";
import React from "react";


export default function Success(){
    
        return (
            <div className="flex flex-col justify-center items-center p-6">
                <Card className="max-w-screen-xs max-h-screen-xs text-foreground bg-background p-6">
                    <CardHeader>
                        <h1><b>Success!</b></h1>
                    </CardHeader>
                </Card>
            </div>
        );
}