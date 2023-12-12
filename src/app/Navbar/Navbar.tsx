import React from "react";
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

const menuItems = [
  "about", "contact", "donate"

]

export default function Navbar() {
  return (
    <NextNavbar className="bg-transparent" shouldHideOnScroll isBordered >
      <NavbarBrand>
        <Button
          className="text-foreground bg-background"
          as={Link}
          color="default"
          variant="flat"
          href="#">
          lowwhisper
        </Button>


      </NavbarBrand>
      <NavbarContent className="" justify="end">

        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Button
              className="text-foreground bg-background"
              as={Link}
              color="default"
              variant="flat"
              href="#"
            >
              {item}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
    </NextNavbar>
  )

}