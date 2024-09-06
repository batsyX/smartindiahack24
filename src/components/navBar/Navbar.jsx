import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  
import Group from "../../assets/Group.png"
import user from "/user.png"
import menu from "/menu.png"

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center sticky top-0 left-0 bg-white z-10">
            <div className="flex-1">
                <img src={Group} className=" w-46 h-28 pl-5 pt-5 max-sm:h-20"  alt="" />
            </div>
            <div className="max-lg:hidden flex-1 flex justify-end">
                <NavigationMenu >
                    <NavigationMenuList className="gap-10 pr-20 max-md:gap-0">
                            <NavigationMenuItem>
                                    <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                                        HOME
                                    </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem className=" text-black">
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-[480px] max-md:w-[280px] flex flex-col items-center">
                                            <NavigationMenuLink href="/dashboard" className="w-full text-center py-4 hover:bg-gray-100 h-[60px]">Dashboard</NavigationMenuLink>
                                            <NavigationMenuLink href="/services" className="w-full text-center py-4 hover:bg-gray-100 h-[60px]">Services</NavigationMenuLink>
                                            <NavigationMenuLink href="/services" className="w-full text-center py-4 hover:bg-gray-100 h-[60px]">abc service</NavigationMenuLink>
                                            <NavigationMenuLink href="/services" className="w-full text-center py-4 hover:bg-gray-100 h-[60px]">xyz service</NavigationMenuLink>
                                        </div>
                                    </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem className=" text-black">
                                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-[480px] max-md:w-[280px] flex flex-col items-center">
                                            <NavigationMenuLink href="/services" className="w-full text-center py-4 hover:bg-gray-100 h-[60px]">Resource 1</NavigationMenuLink>
                                            <NavigationMenuLink href="/services" className="w-full text-center py-4 hover:bg-gray-100 h-[60px]">Sitemap</NavigationMenuLink>
                                        </div>
                                    </NavigationMenuContent>
                            </NavigationMenuItem>
                        
                            <NavigationMenuItem>
                                    <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                                        About Us
                                    </NavigationMenuLink>
                            </NavigationMenuItem>
                            
                            <DropdownMenu>
                                <DropdownMenuTrigger className="w-[25px] h-[25px]">
                                    <img src={user} height={25} width={25} alt="" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <a href="/"><DropdownMenuItem>Profile</DropdownMenuItem></a>
                                    <a href="/"><DropdownMenuItem>Parcels</DropdownMenuItem></a>
                                    <a href="/"><DropdownMenuItem>History</DropdownMenuItem></a>
                                    
                                </DropdownMenuContent>
                            </DropdownMenu>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className=" lg:hidden flex-1 flex justify-end pr-6 ">
                            <DropdownMenu >
                                <DropdownMenuTrigger>
                                    <img src={menu} height={25} width={25} alt="" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                            <a href="/">
                                                <DropdownMenuItem >
                                                    Profile
                                                </DropdownMenuItem>
                                            </a>
                                            <a href="/">
                                                <DropdownMenuItem >
                                                    Services
                                                </DropdownMenuItem>
                                            </a>
                                            <a href="/ggsg">
                                                <DropdownMenuItem >
                                                    Resources
                                                </DropdownMenuItem>
                                            </a>
                                            <a href="/about">
                                                <DropdownMenuItem >
                                                    About Us
                                                </DropdownMenuItem>
                                            </a>
                                </DropdownMenuContent>
                            </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar;