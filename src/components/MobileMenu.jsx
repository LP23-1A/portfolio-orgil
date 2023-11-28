import { MENU_ITEMS } from "@/constants/menu";
import Layout from "./Layout";
import CloseIcon from "./icons/CloseIcon";
import Logo from "./icons/Logo";
import Theme from "./icons/Theme";

export default function MobileMenu(props) {
    const closeHandler = () => {
        props.setIsOpen(false)
    }
    return (
        <Layout>
            <div className="w-screen h-screen top-0 left-0 absolute bg-[#00000070] flex justify-end">
                <div className="w-10/12 h-screen p-4 bg-white">
                    <div className="flex justify-between">
                        <Logo />
                        <button onClick={closeHandler}>
                            <CloseIcon />
                        </button>
                    </div>
                    <hr className="mt-4" />
                    <ul className="py-4 flex flex-col gap-4">
                        {
                            MENU_ITEMS.map(item => (
                                <li className="list-none">{item}</li>
                            ))
                        }
                    </ul>
                    <hr className="mt-4" />
                    <div className="py-4">
                        <div className="flex justify-between">
                            <p>Switch theme</p>
                            <button>
                                <Theme />
                            </button>
                        </div>

                        <button className="mt-4 w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium">
                            Download CV
                        </button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}