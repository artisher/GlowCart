import bodyCare from "../../../public/category/bodyCare.jpg";
import hairMask from "../../../public/category/hairMask.jpg";
import fragrance from "../../../public/category/fragrance.jpg";
import gifts from "../../../public/category/gifts.jpg";
import makeUp from "../../../public/category/makeUp.jpg";
import men from "../../../public/category/men.jpg";
import skinCare from "../../../public/category/skinCare.jpg";
import tools from "../../../public/category/tools.png";
import { useNavigate } from "react-router-dom";

export const Category = () => {
    const navigate = useNavigate();
    return (

        <div className="flex flex-wrap justify-center gap-10 text-white mx-auto py-5 w-[90%] my-[50px] lg:gap-30 lg:my-[50px] " >
            <div onClick={() => navigate('/shop?category=body', { replace: false })} className=" w-32 h-32 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform bg-cover " style={{ backgroundImage: `url(${bodyCare})` }}>
                <div className="bg-black/40 w-32 h-32 rounded-full flex justify-center items-center border-8 border-[#FF5C8D]">
                    <h2 className="text-[23px]">Body</h2>
                </div>
            </div>
            <div onClick={() => navigate('/shop?category=hair', { replace: false })} className=" w-32 h-32 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform bg-cover" style={{ backgroundImage: `url(${hairMask})` }}>
                <div className="bg-black/40 w-32 h-32 rounded-full flex justify-center items-center border-8 border-[#FF5C8D]">
                    <h2 className="text-[23px]">Hair</h2>
                </div>
            </div>

            <div onClick={() => navigate('/shop?category=skincare', { replace: false })} className=" w-32 h-32 flex items-center justify-center rounded-full  cursor-pointer hover:scale-110 transition-transform bg-cover" style={{ backgroundImage: `url(${skinCare})` }}>
                <div className="bg-black/40 w-32 h-32 rounded-full flex justify-center items-center border-8 border-[#FF5C8D]">
                    <h2 className="text-[23px]">Skin Care</h2>
                </div>
            </div>
            <div onClick={() => navigate('/shop?category=makeup', { replace: false })} className="  w-32 h-32 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform bg-cover" style={{ backgroundImage: `url(${makeUp})` }}>
                <div className="bg-black/40 w-32 h-32 rounded-full flex justify-center items-center border-8 border-[#FF5C8D]">
                    <h2 className="text-[23px]">Make Up</h2>
                </div>
            </div>
            <div onClick={() => navigate('/shop?category=fragrance', { replace: false })} className=" w-32 h-32 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform bg-cover" style={{ backgroundImage: `url(${fragrance})` }}>
                <div className="bg-black/40 w-32 h-32 rounded-full flex justify-center items-center border-8 border-[#FF5C8D]">
                    <h2 className="text-[23px]">fragrance</h2>
                </div>
            </div>
            <div onClick={() => navigate('/shop?category=tools', { replace: false })} className=" w-32 h-32 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform bg-cover" style={{ backgroundImage: `url(${tools})` }}>
                <div className="bg-black/40 w-32 h-32 rounded-full flex justify-center items-center border-8 border-[#FF5C8D]">
                    <h2 className="text-[23px]">tools</h2>
                </div>
            </div>
            <div onClick={() => navigate('/shop?category=men', { replace: false })} className=" w-32 h-32 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform bg-cover" style={{ backgroundImage: `url(${men})` }}>
                <div className="bg-black/40 w-32 h-32 rounded-full flex justify-center items-center border-8 border-[#FF5C8D]">
                    <h2 className="text-[23px]">men</h2>
                </div>
            </div>
            <div onClick={() => navigate('/shop?category=gifts', { replace: false })} className=" w-32 h-32 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform bg-cover" style={{ backgroundImage: `url(${gifts})` }}>
                <div className="bg-black/40 w-32 h-32 rounded-full flex justify-center items-center border-8 border-[#FF5C8D]">
                    <h2 className="text-[23px]">gifts</h2>
                </div>
            </div>
        </div >
    )
}
