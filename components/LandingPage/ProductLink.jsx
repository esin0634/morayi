import Link from "next/link"
import { BsBoxArrowInUpRight } from "react-icons/bs";

const ProductLink = ({id , positionTop = "", positionBottom = "", positionLeft = "", positionRight = ""}) => {


  return (
    <div className="hover:text-orange-700 ">

      <Link href= {`/store/product/${id}`}>
        <div
            style={{
            position: "absolute",
            top: positionTop,
            bottom: positionBottom,
            left: positionLeft,
            right:positionRight,
            transform: "translate(-50%, -50%)",
            }}
            
        >
            <BsBoxArrowInUpRight className="hover:scale-125" />

        </div>
        </Link>

    </div>

  )
}

export default ProductLink