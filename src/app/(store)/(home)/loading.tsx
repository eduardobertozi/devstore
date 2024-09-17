import { Sekeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Sekeleton className="col-span-6 row-span-6 h-[856px]" />
      <Sekeleton className="col-span-3 row-span-3" />
      <Sekeleton className="col-span-3 row-span-3" />
    </div>
  )
}
