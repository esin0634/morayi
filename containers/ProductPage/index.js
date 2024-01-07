import ProductInfo from "@/components/ProductPage/ProductInfo";


export default function ProductPageContainer({id , product}){
    
    return(
        <div>
            <ProductInfo id = {id} product={product}/>
        </div>
    )
}