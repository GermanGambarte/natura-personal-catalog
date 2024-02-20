import api from '@/api/api'
import { Product } from '@/components/Product'
import type { ProductType } from '@/types'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  const titles = [...new Set(products.map((product) => product.type))]
  console.log(titles)

  useEffect(() => {
    api.product.list().then(setProducts)
  }, [])
  return (
    <div className='w-full bg-custom-bg-primary grid justify-center'>
      {titles.map((title) => (
        <section key={title} className='grid'>
          <h2 className='md:text-center text-custom-fg-primary text-4xl font-bold py-8 capitalize'>
            {title}
          </h2>
          <div className='grid justify-center gap-8 md:grid-cols-2 xl:grid-cols-3'>
            {products
              .filter(({ type }) => title === type)
              .map(
                ({
                  id,
                  image,
                  name,
                  description,
                  previousPrice,
                  currentPrice
                }) => (
                  <Product
                    key={id}
                    name={name}
                    image={image}
                    description={description}
                    previousPrice={previousPrice}
                    currentPrice={currentPrice}
                  />
                )
              )}
          </div>
        </section>
      ))}
    </div>
  )
}

export default App
