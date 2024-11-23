import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download, Trash2 } from 'lucide-react'

interface ConversionItem {
  id: string
  title: string
  duration: string
  size: string
  date: string
}

interface ConversionHistoryProps {
  items: ConversionItem[]
  onDownload: (id: string) => void
  onDelete: (id: string) => void
}

export function ConversionHistory({ items, onDownload, onDelete }: ConversionHistoryProps) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Conversion History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.duration}</TableCell>
              <TableCell>{item.size}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => onDownload(item.id)}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => onDelete(item.id)}>
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

