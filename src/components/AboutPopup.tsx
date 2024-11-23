import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface AboutPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function AboutPopup({ isOpen, onClose }: AboutPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About MelodyFetch</DialogTitle>
          <DialogDescription>
            MelodyFetch is a powerful and user-friendly YouTube to MP3 converter.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            Our service allows you to easily convert YouTube videos to high-quality MP3 files. 
            Whether you&apos;re looking to create a playlist for offline listening or extract audio 
            from your favorite videos, MelodyFetch has got you covered.
          </p>
          <p>
            Features:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>High-quality audio conversion (up to 320kbps)</li>
            <li>Fast and efficient processing</li>
            <li>User-friendly interface</li>
            <li>No registration required</li>
            <li>Supports a wide range of YouTube video formats</li>
          </ul>
          <p>
            Please note that you should only convert videos that you have the right to use, 
            and respect copyright laws and YouTube&apos;s terms of service.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

