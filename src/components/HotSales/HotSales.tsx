import SliderInHotSales from "../SliderInHotSales/SliderInHotSales"

export const HotSales = () => {

    return (
        <div>
            <h4 className="text-[26px] font-semibold text-gray-600 !px-2">Hot Sales</h4>
            <div className=" rounded-lg flex flex-col gap-10 bg-[#FF5C8D] p-2 shadow-xl">

                <div>
                    <SliderInHotSales />
                </div>
            </div>
        </div>
    )
}
