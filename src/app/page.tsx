import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'

/**
 * Render a vertical stack of sample UI controls for the home screen.
 *
 * The returned element is a container with spacing and padding that wraps five child blocks:
 * a Button with label text, an Input with a placeholder, a Progress set to 50, a Textarea with a default value, and a Checkbox.
 *
 * @returns A JSX element containing the composed UI controls
 */
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