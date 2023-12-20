import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import React from "react";
import { Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

export default function About() {
  return (
    <div className="flex justify-center items-center p-6">
        <Card className="max-w-screen-md text-foreground bg-background p-6">
          <center>
        <Image
              alt="A picture of Noah Burnette"
              className="object-cover flex my-6"
              height={200}
              src="/me.jpg"
              width={200}
              
            />
            </center>
        <Divider/>
        <CardHeader>
          <h1>
            <b>About me</b>
          </h1>
        </CardHeader>
        <CardBody>
          <p className="font-serif">
          I am a firm believer in the Gospel. 
          I also am happily engaged to my fiancée, Riley. 
          I love serving on the worship team at Hendersonville Church. I&apos;m a recent Computer Science graduate from UNCA. In my free time, 
          I love spending time with Riley, going on hikes, and coding.
          </p>
        </CardBody>
        <CardHeader>
          <h2>
            <b>
              Calling
            </b>
            
          </h2>
        </CardHeader>
        <CardBody>
          <p className="font-serif">
          This past year, I feel as though God has called me to use my gifts in programming and software development.
          My hope in this endeavor is that God is glorified and it gives me the chance to fellowship with other believers from all backgrounds. 
          Whether you are getting married, 
          starting a company, or planting a church, I would love to be a part of the process. 
          </p>
          
          <p className="font-serif">
          If you need prayer or a website, click on the <Link href="/contact">contact</Link> page so we can get in touch.
          </p>
        </CardBody>

      </Card>


    </div>
  )
}