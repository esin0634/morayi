import Image from "next/image"
import Link from "next/link"
import homeimg from "@/public/3d-model-house-room.jpg"
import ProductLink from "./ProductLink"


const HomeImg = () => {
  
    return (
        <div>
            <div >
                <div >
                    <Image
                    unoptimized
                    src={homeimg}
                    alt="Room Image"
                    fill
                    />
                </div>

                <ProductLink id={"1"} positionTop={"470px"} positionLeft={"470px"}/>
                <ProductLink id={"2"} positionBottom={"470px"} positionRight={"470px"}/>
            
            </div>
        </div>
    )
}

export default HomeImg