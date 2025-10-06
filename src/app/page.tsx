import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'

export default function Home() {
  return(
    <div className='flex flex-col gap-4 max-w-max p-4'>
      <div>
        <Button>
          I am a `Button`
        </Button>
      </div>
      <div>
        <Input placeholder='I am an `Input`' />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea defaultValue='I am a `Textarea`' />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  )
}