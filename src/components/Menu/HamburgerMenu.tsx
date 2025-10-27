import { CircleUser, MenuIcon, ShoppingCart, Sun, X } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Logo = "/Logo/Logo.png"
export const HamburgerMenu = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
        setOpen(!open)
    }
    const handleAboutUs = () => {
        navigate('/about-us')
        setOpen(!open)
    }
    const handleHome = () => {
        navigate('/')
        setOpen(false)
    }
    const handlContactUs = () => {
        navigate('/Contact-Us')
        setOpen(false)
    }
    const handlCategories = () => {
        navigate('/categories')
        setOpen(false)
    }
    const handlCart = () => {
        navigate('/Cart')
        setOpen(false)
    }
    const handlShop = () => { navigate('/shop'); setOpen(false) }
    return (
        <div>

            <div className="bg-[#fff8f9] flex justify-between gap-4 px-3 border-b-1 border-[#e4e4e4] shadow-xl">
                <div className=" flex gap-4 px-3 items-center">
                    <button onClick={() => setOpen(!open)}><MenuIcon size={"26px"} color="#444444" /></button>
                    <Sun size={"26px"} color="#444444" />
                </div>

                <div>
                    <img src={Logo} alt="" onClick={handleHome} className="h-22 w-24 cursor-pointer " />

                </div>

            </div>


            <div className={`fixed top-0 left-0 w-3/4 h-full bg-[#FFF5F7]
         p-5 transform transition-transform duration-300 z-50
         ${open ? "translate-x-0" : "-translate-x-full"}`}>

                <div className="flex flex-col gap-7 bg-[#FFF5F7] w-full p-[15px] h-screen">

                    <div className="flex justify-between">

                        <ul className="flex gap-7 ">
                            <li className="bg-[#FF5C8D] p-1.5 rounded-xl" onClick={handlCart}><ShoppingCart color="#fff" /></li>
                            <li className="bg-[#FF5C8D] p-1.5 rounded-xl" onClick={handleLogin}><CircleUser color="#fff" /></li>
                        </ul>
                        <div>
                            <button onClick={() => setOpen(false)}
                                className="  bg-[#FF5C8D] p-1.5 rounded-full hover:bg-[#e54a7a]
                                transition-colors"><X color="#fff" />
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <ul className="flex flex-col gap-6 text-[#575757]" >
                            <li onClick={handleHome}>Home</li>
                            <li onClick={handlShop}>Shop</li>
                            <li onClick={handlCategories}>Categories</li>
                            <li onClick={handleAboutUs}>About Us</li>
                            <li onClick={handlContactUs}>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
