import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from 'lucide-react'

interface UrlInputProps {
  onConvert: () => void
}

export function UrlInput({ onConvert }: UrlInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="url">YouTube URL</Label>
      <div className="flex gap-2">
        <Input 
          id="url"
          placeholder="Paste YouTube URL here..."
          className="flex-1"
        />
        <Button onClick={onConvert} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Convert
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

