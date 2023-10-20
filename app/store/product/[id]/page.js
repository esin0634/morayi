
export default function productpage({params}) {
    console.log(params)
    return (
      <div className='w-screen h-screen flex items-center justify-center'>
        product page {params.id} 
      </div>
    )
  }
  