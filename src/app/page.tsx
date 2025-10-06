import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-max p-4">
      <Button type="button">I am a Button</Button>

      <label htmlFor="demo-input" className="text-sm font-medium">
        Demo Input
      </label>
      <Input
        id="demo-input"
        placeholder="I am an Input"
        className="mt-1"
      />

      <label htmlFor="demo-progress" className="text-sm font-medium">
        Demo Progress
      </label>
      <Progress
        id="demo-progress"
        value={50}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={50}
        className="mt-1"
      />

      <label htmlFor="demo-textarea" className="text-sm font-medium">
        Demo Textarea
      </label>
      <Textarea
        id="demo-textarea"
        defaultValue="I am a Textarea"
        className="mt-1"
      />

      <label className="flex items-center space-x-2 text-sm font-medium">
        <Checkbox id="demo-checkbox" />
        <span>I am a Checkbox</span>
      </label>
    </div>
  );
}
