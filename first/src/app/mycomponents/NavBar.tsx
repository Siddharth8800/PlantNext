"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavBar({
  items,
  mainstyles,
  liststyles,
}: Readonly<{ items: string[]; mainstyles?: string; liststyles?: string }>) {
  const renderItems = () => {
    return items.map((item, index) => (
      <NavigationMenuItem className={navigationMenuTriggerStyle()} key={index}>
        <Link className="text-xl" href={item === "home" ? "/" : item}>
          {item.toUpperCase()}
        </Link>
        {/* <Separator orientation="vertical" /> */}
      </NavigationMenuItem>
    ));
  };

  return (
    <>
      <NavigationMenu className={`m-5 ${mainstyles}`}>
        <NavigationMenuList className={`${liststyles}`}>
          {renderItems()}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
