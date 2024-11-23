import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function QualitySelector() {
  return (
    <div className="space-y-2">
      <Label>Audio Quality</Label>
      <Select defaultValue="320">
        <SelectTrigger>
          <SelectValue placeholder="Select quality" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="320">320 kbps</SelectItem>
          <SelectItem value="256">256 kbps</SelectItem>
          <SelectItem value="192">192 kbps</SelectItem>
          <SelectItem value="128">128 kbps</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

