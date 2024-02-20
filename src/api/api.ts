import { ProductType } from '@/types'

const URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ32sWA00ZA-bc0J6xyQ8v55K3Y9_J5FLXDyeQCF62iFw4zoGT2ic87FE-fMEVAwspb5XGEf0n7vK2w/pub?output=csv'
const api = {
  product: {
    list: async (): Promise<ProductType[]> => {
      return fetch(URL)
        .then((res) => res.text())
        .then((text) => {
          const rows = text.split('\n').slice(1)
          return rows.map((row) => {
            const [
              id,
              type,
              brand,
              description,
              name,
              previousPrice,
              currentPrice,
              image
            ] = row.split(',')
            return {
              id,
              type,
              brand,
              description,
              name,
              previousPrice: Number(previousPrice),
              currentPrice: Number(currentPrice),
              image
            }
          })
        })
    }
  }
}

export default api
