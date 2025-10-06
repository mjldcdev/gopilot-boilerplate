import { Button } from '@/components/ui/button'

export default function Home() {
  return(
    <div className='flex flex-col gap-2 max-w-max p-2'>
      <h1 className='text-rose-500'>
        Hello World!
      </h1>
      <Button variant='destructive'>
        Hello World!
      </Button>
    </div>
  )
}