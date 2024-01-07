import AboutUsComponent from "@/components/StorePage/AboutUsComponent";
import Products from "@/components/StorePage/Products";
import ScrollingImage from "@/components/StorePage/ScrollingImage";
import StoreHome from "@/components/StorePage/StoreHome";
import Image from "@/components/StorePage/Image";
import Footer from "@/components/Footer";



export default function StorePageContainer(){
    
    return(
        <div>
            <StoreHome/>
            <Products />
            <Footer />
        </div>
    )
}