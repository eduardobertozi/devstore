import { setTimeout } from 'timers/promises'

export default async function Home() {
  await setTimeout(2000)

  return <div>hello world</div>
}
