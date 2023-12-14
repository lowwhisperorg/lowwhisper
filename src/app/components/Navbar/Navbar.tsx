"use client"
import React from "react";
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, ButtonGroup } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const menuItems = [
  "about", "contact"
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <NextNavbar className="bg-transparent backdrop-blur-none" shouldHideOnScroll>
      <NavbarBrand>
        <Button
          className="text-foreground bg-background"
          as={Link}
          color="default"
          variant="flat"
          href="/">
          lowwhisper
        </Button>
      </NavbarBrand>

      <NavbarContent className="" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden  bg-background text-foreground h-10 w-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        
        {menuItems.map((item) => (
          <NavbarItem key={item} className="hidden sm:block">
            <Button
              className={`${pathname === "/" + item ? 'text-primary' : 'text-foreground'}  bg-background h-10 w-10`}
              as={Link}
              color="default"
              variant="flat"
              href={`/${item}`}
            >
              {item}
            </Button>
          </NavbarItem>
        ))}
        
        <NavbarMenu className="dark flex bg-background sm:hidden">
          <ButtonGroup className="flex items-end flex-col">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item}>
              <Button
                className={`${pathname === "/" + item ? 'text-primary' : 'text-foreground'}  bg-background`}
                as={Link}
                color="default"
                variant="flat"
                href={`/${item}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Button>
            </NavbarMenuItem>
          ))}
          </ButtonGroup>
        </NavbarMenu>
      </NavbarContent>

    </NextNavbar>
  )
}