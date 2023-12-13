import { Card, CardBody, CardHeader, Input, Button, Autocomplete, AutocompleteItem, Link } from "@nextui-org/react";
import React from "react";

export default function Contact() {
    const services = ["Prayer", "Service"]
    return (
        <div className="flex h-[calc(100vh-64px)] justify-center items-center flex-row min-h-full min-w-full p-6">
            <Card className="max-w-screen-sm text-foreground bg-background p-6">
                <CardHeader>
                    <h1><b>Contact</b></h1>
                </CardHeader>
                <CardBody className="">
                    <p>Use the form below to contact me for services or for prayer requests! If you would like to donate,
                        please use the <Link href="/donate">donate</Link> page.
                    </p>
                    <form className="p-6">
                        <Input type="text" label="Name"/>
                        <Input type="email" label="Email" />
                        <Autocomplete label="Request">
                        </Autocomplete>

                        <Input type="textarea" label="Message" />
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
            <div className="grow">

            </div>
        </div>
    );
}
