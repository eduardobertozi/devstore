import { setTimeout } from 'timers/promises'
import data from '../data.json'

export async function GET() {
  await setTimeout(1000)
  const featuredProduts = data.products.filter((product) => product.featured)

  return Response.json(featuredProduts)
}
