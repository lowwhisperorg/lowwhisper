import { Card, CardBody, CardHeader, Input, Button, Link, Radio, RadioGroup } from "@nextui-org/react";
import React, {useState} from "react";

export default function Contact() {

    // const [isSubmitted, setIsSubmitted] = useState(false);

    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();

    //     const myForm = event.target as HTMLFormElement;
    //     const formData = new FormData(myForm);
    //     const formParams = new URLSearchParams()

    //     formData.forEach((value, key) => {
    //         formParams.append(key, value as string);
    //     });
      
    //     fetch("/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: formParams.toString(),
    //     })
    //       .then(() => setIsSubmitted(true))
    //       .catch((error) => alert(error));
    // };

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
                    <form className="p-6" method="POST" name="contact" netlify-data="true" action="/success">
                        <input type="hidden" name="form-name" value="contact" />
                        <RadioGroup
                            label="What are you requesting?"
                            orientation="horizontal"
                            color="primary"
                            className="py-2"
                            isRequired
                        >
                            <Radio type="radio" value="prayer" id="prayer" >Prayer</Radio>
                            <Radio type="radio" value="service" id="service" >Service</Radio>
                            <Radio type="radio" value="other" id="other" >Other</Radio>

                        </RadioGroup>
                        <Input isRequired type="text" name="name" label="Name" id="name"/>
                        <Input isRequired type="email" name="email" label="Email" id="email" />
                        <Input
                            label="Phone Number (Optional)"
                            type="telephone"
                            name="telephone"
                        />

                        <Input isRequired type="textarea" label="Message" name="message" id="message" />
                        

                        <Button
                            variant="shadow"
                            color="primary"
                            type="submit"
                            className="mt-4 text-foreground"
                        >
                            Send Message
                        </Button>
                    </form>
                    {/* {isSubmitted && <center><p className="p-6">Thank you! I will get back to you soon.</p></center>} */}
                </CardBody>
            </Card>
        </div>
    );
}
