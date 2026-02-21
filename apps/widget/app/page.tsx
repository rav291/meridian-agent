import { Button } from "@workspace/ui/components/button"
import { add } from "../../../packages/math/src/add"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Widget</h1>
        <div className="flex gap-2">
          <Button>Button</Button>
          <Button variant="outline">Outline</Button>
          <span>Sum is: {add(2, 3)}</span>
        </div>
      </div>
    </div>
  )
}
