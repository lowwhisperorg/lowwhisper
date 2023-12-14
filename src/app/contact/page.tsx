"use client"
import { Card, CardBody, CardHeader, Input, Button, Link, Radio, RadioGroup } from "@nextui-org/react";
import React, { useState } from "react";

export default function Contact() {
    const services = ["Prayer", "Service"]

    const [selected, setSelectedValue] = useState('');

    return (
        <div className="flex flex-col justify-center items-center p-6">
            <Card className="max-w-screen-xs max-h-screen-xs text-foreground bg-background p-6">
                <CardHeader>
                    <h1><b>Contact</b></h1>
                </CardHeader>
                <CardBody className="">
                    <p>Use the form below to contact me for services or for prayer requests! If you would like to donate,
                        please use the <Link href="/donate">donate</Link> page.
                    </p>
                    <form className="p-6">
                        <Input isRequired type="text" label="Name" />
                        <Input isRequired type="email" label="Email" />
                        <Input 
                        label="Phone Number (Optional)"
                        type="telephone"
                        name="telephone"
                        />
                        <RadioGroup
                            label="Select request"
                            orientation="horizontal"
                            color="primary"
                            className="py-2"
                            isRequired
                        >
                            <Radio value="prayer" >Prayer</Radio>
                            <Radio value="service" >Service</Radio>
                            <Radio value="other" >Other</Radio>

                        </RadioGroup>
                            <Input isRequired type="textarea" label="Message" />

                            <Button
                                variant="shadow"
                                color="primary"
                                className="mt-4 text-foreground"
                                
                            >
                                Send Message
                            </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}