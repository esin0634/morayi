import Image from "next/image";
import Link from "next/link";
import homeimg from "@/public/morayı.png";
import ProductLink from "./ProductLink";



const HomeImg = () => {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "scroll", // Prevent horizontal scrolling
        }}
      >
        <Image
          src={homeimg}
          alt="Room Image"
          layout="fill" // Or try "intrinsic" if needed
          objectFit="cover" // Maintain aspect ratio
          quality={100} // Ensure high quality
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <ProductLink id={"1"} positionTop={"340px"} positionLeft={"520px"} />
      <ProductLink id={"2"} positionBottom={"110px"} positionRight={"660px"} />
    </div>
  );
};

export default HomeImg;
