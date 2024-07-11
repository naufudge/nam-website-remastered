import React from 'react';
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const links = {
    "About": {
      "About Us": "",
      "Board Members": "",
      "Director General": ""
    },
    "Media": {
      "News": "",
      "Press Release": "",
      "Event Photo Gallery": "",
    },
    "Records": {
      "Historical Documents": "",
      "Photo Gallery": "",
      "Video Gallery": ""
    },
    "Announcements": {
      "Careers": "",
      "Circular": "",
      "Iulaan": ""
    },
    "Documents": {
      "Downloads": "",
      "Forms": "",
      "Publications": "",
      "Reports": ""
    },
    "Legal": "",
}

const NavBar = () => {
  return (
    <div className="fixed flex py-4 z-50 top-0 w-full justify-center bg-white drop-shadow-md">
        <div className="bg-white flex justify-center min-w-max w-screen">
          <Image src="/logo.png" width={150} height={150} alt="logo" className="fixed left-3 top-3 bg-white" />
          <NavigationMenu className="bg-white rounded-xl text-lg">
            <NavigationMenuList>
                {Object.keys(links).map((link, index) => (
                    <div key={index} className="mt-3">
                      {typeof(links[link as keyof typeof links]) != "string" ?
                        <NavigationMenuItem className="mx-auto">
                        <NavigationMenuTrigger>{link}</NavigationMenuTrigger>
                          <NavigationMenuContent className="p-3">
                          <NavigationMenuLink className="flex w-[600px]">
                            {Object.keys(links[link as keyof typeof links]).map((sublink, index) => (
                              <span key={index} className={`mx-auto cursor-pointer ${navigationMenuTriggerStyle()}`}>{sublink}</span>
                            ))}
                          </NavigationMenuLink>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      :
                        <NavigationMenuItem className="">
                          <NavigationMenuLink className={`cursor-pointer ${navigationMenuTriggerStyle()}`}>{link}</NavigationMenuLink>
                        </NavigationMenuItem>
                      }
                    </div>
                ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
    </div>
  )
}

export default NavBar
