import { Progress } from "@/components/ui/progress"

interface ProgressIndicatorProps {
  progress: number
}

export function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  return (
    <div className="w-full space-y-2">
      <Progress value={progress} className="w-full" />
      <p className="text-sm text-muted-foreground text-center">{progress}% Complete</p>
    </div>
  )
}

