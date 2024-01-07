import Example from "@/components/Example";
import Footer from "@/components/Footer";
import AboutUsComponent from "@/components/StorePage/AboutUsComponent";
import WorkshopHome from "@/components/WorkshopPage/WorshopeHome";
import WorkshopImage from "@/components/WorkshopPage/Image";

export default function WorkshopPageContainer(){
    
    return(
        <div>
            <WorkshopHome/>
            <WorkshopImage/>
            <AboutUsComponent/>
            <Example/>
            <Footer />
        </div>
    )
}