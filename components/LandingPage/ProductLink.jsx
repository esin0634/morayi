import Link from "next/link"

const ProductLink = ({id , positionTop = "", positionBottom = "", positionLeft = "", positionRight = ""}) => {


  return (
    <div className="hover:text-blue-400">
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
            Click here {id}
        </div>
        </Link>

    </div>

  )
}

export default ProductLink