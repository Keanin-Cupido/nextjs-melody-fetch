import { Button } from "@/components/ui/button"
import { Upload } from 'lucide-react'

export function UploadArea() {
  return (
    <div className="border-2 border-dashed border-accent/25 rounded-lg p-8 text-center space-y-4 bg-card hover:bg-accent/10 transition-colors">
      <div className="flex justify-center">
        <div className="bg-accent/20 p-4 rounded-full">
          <Upload className="h-8 w-8 text-accent" />
        </div>
      </div>
      <div>
        <p className="font-medium text-accent">Drop your video file here</p>
        <p className="text-sm text-muted-foreground">or click to browse</p>
      </div>
      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
        Choose File
      </Button>
    </div>
  )
}

