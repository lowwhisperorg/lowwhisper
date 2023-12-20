"use client"
import { Card, CardBody, CardHeader, Input, Button, Link, Radio, RadioGroup } from "@nextui-org/react";
import React, {useState} from "react";

export default function Contact() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // handle form submission logic here
        setIsSubmitted(true);
    };

    return (
        <div className="flex flex-col justify-center items-center p-6">
            <Card className="max-w-screen-xs max-h-screen-xs text-foreground bg-background p-6">
                <CardHeader>
                    <h1><b>Contact</b></h1>
                </CardHeader>
                <CardBody className="">
                    <p>Use the form below to contact me for services or prayer requests!
                        {/* If you would like to donate,please use the <Link href="/donate">donate</Link> page. */}
                    </p>
                    <form className="p-6" method="POST" netlify-data="true" onSubmit={handleSubmit}>
                        <RadioGroup
                            label="What are you requesting?"
                            orientation="horizontal"
                            color="primary"
                            className="py-2"
                            isRequired
                        >
                            <Radio value="prayer" >Prayer</Radio>
                            <Radio value="service" >Service</Radio>
                            <Radio value="other" >Other</Radio>

                        </RadioGroup>
                        <Input isRequired type="text" label="Name" />
                        <Input isRequired type="email" label="Email" />
                        <Input
                            label="Phone Number (Optional)"
                            type="telephone"
                            name="telephone"
                        />

                        <Input isRequired type="textarea" label="Message" />
                        

                        <Button
                            variant="shadow"
                            color="primary"
                            type="submit"
                            className="mt-4 text-foreground"
                        >
                            Send Message
                        </Button>
                    </form>
                    {isSubmitted && <center><p className="p-6">Thank you! I will get back to you soon.</p></center>}
                </CardBody>
            </Card>
        </div>
    );
}
