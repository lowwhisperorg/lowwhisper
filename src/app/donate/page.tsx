import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function Donate(){
    return(
        <div className="flex justify-between flex-col min-h-full">
            <Card className="max-w-screen-lg text-foreground bg-background">
                <CardBody>
                    <p>Donate</p>
                </CardBody>
            </Card>
        </div>
    )
}