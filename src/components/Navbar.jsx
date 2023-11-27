import { useState } from "react";
import Layout from "./Layout";
import Logo from "./icons/Logo";
import MenuIcon from "./icons/MenuIcon";
import MobileMenu from "./MobileMenu";
import Theme from "./icons/Theme";
import { MENU_ITEMS } from "@/constants/menu";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Layout>
            <nav className="w-full flex justify-between items-center py-4">

                <Logo />

                <button className="md:hidden" onClick={menuHandler}>
                    <MenuIcon />
                </button>

                <div className="hidden md:flex items-center gap-4">
                    <ul className="py-4 flex gap-4">
                        {
                            MENU_ITEMS.map(item => (
                                <li className="list-none">{item}</li>
                            ))
                        }
                    </ul>

                    <button>
                        <Theme />
                    </button>

                    <button className="w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium">
                        Download CV
                    </button>
                </div>
            </nav>
            {
                isOpen && <MobileMenu setIsOpen={setIsOpen} />
            }
        </Layout>
    )
}