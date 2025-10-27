import { Category } from "../../components/Category/Category";
import { Header } from "../../components/Header/Header";
import { HotSales } from "../../components/HotSales/HotSales";
import { WhyUs } from "../../components/WhyUs/WhyUs";


const Home = () => {
    return (
        <div className="flex flex-col gap-10 ">
            <Header />

            <HotSales />

            <WhyUs />

            <Category />
        </div>
    )
}
export default Home;