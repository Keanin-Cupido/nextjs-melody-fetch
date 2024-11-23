import { Card, CardContent } from "@/components/ui/card"
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-card hover:bg-accent/10 transition-colors border border-accent/20">
      <CardContent className="pt-6 text-center">
        <Icon className="h-8 w-8 mx-auto mb-2 text-accent" />
        <h3 className="font-semibold text-accent">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

