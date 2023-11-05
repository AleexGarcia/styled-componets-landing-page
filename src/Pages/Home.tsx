
import Articles from "../components/Articles/Articles";
import BankDetails from "../components/BankDetails/BankDetails";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Home() {
    return (
        <>  
            <Header/>
            <Banner/>
            <BankDetails/>
            <Articles/>
            <Footer/>
        </>
    )
}

export default Home;