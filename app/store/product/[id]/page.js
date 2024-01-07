
import ProductPageContainer from "@/containers/ProductPage"

const products = [
  {
    id : 1,
    information : " 1 The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.",
    features : [ 
    { name: 'Bıçak Tutacağı', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  },
  {
    id : 2,
    information : "2 The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.",
    features : [ 
    { name: 'Saksı Ayağı', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  }
  ]
export default function productpage({params}) {
    console.log(params.id)
    const selectedProduct = products.find((product) => product.id === parseInt(params.id));
    console.log(selectedProduct)


    return (
      <div className='w-screen flex items-center justify-center'>
        <ProductPageContainer id={params.id} product={selectedProduct} />
      </div>
    )
  }
  