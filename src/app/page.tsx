"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music2, Download, Upload } from 'lucide-react'
import { UrlInput } from "@/components/UrlInput"
import { QualitySelector } from "@/components/QualitySelector"
import { UploadArea } from "@/components/UploadArea"
import { FeatureCard } from "@/components/FeatureCard"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProgressIndicator } from "@/components/ProgressIndicator"
import { ConversionHistory } from "@/components/ConversionHistory"

export default function Home() {
  const [conversionProgress, setConversionProgress] = useState(0)
  const [conversionHistory, setConversionHistory] = useState([
    { id: '1', title: 'Sample Video 1', duration: '3:45', size: '3.2 MB', date: '2023-05-15' },
    { id: '2', title: 'Sample Video 2', duration: '4:20', size: '4.1 MB', date: '2023-05-14' },
  ])

  const handleConvert = () => {
    // Simulating conversion process
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setConversionProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        // Add to conversion history
        setConversionHistory(prev => [
          { id: Date.now().toString(), title: 'New Conversion', duration: '3:30', size: '3.5 MB', date: new Date().toISOString().split('T')[0] },
          ...prev
        ])
      }
    }, 500)
  }

  const handleDownload = (id: string) => {
    console.log(`Downloading file with id: ${id}`)
    // Implement download logic here
  }

  const handleDelete = (id: string) => {
    setConversionHistory(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <Card className="w-full max-w-4xl mx-auto border-accent/20 py-4">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-accent">YouTube to MP3 Converter</CardTitle>
            <CardDescription>
              Convert YouTube videos to high-quality MP3 files quickly and easily
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="url" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="url">URL</TabsTrigger>
                <TabsTrigger value="upload">Upload</TabsTrigger>
              </TabsList>
              <TabsContent value="url">
                <UrlInput onConvert={handleConvert} />
              </TabsContent>
              <TabsContent value="upload">
                <UploadArea />
              </TabsContent>
            </Tabs>

            <QualitySelector />

            {conversionProgress > 0 && conversionProgress < 100 && (
              <ProgressIndicator progress={conversionProgress} />
            )}

            <div className="grid gap-4 md:grid-cols-3">
              <FeatureCard 
                icon={Music2}
                title="High Quality"
                description="Up to 320kbps audio"
              />
              <FeatureCard 
                icon={Download}
                title="Fast Download"
                description="No waiting time"
              />
              <FeatureCard 
                icon={Upload}
                title="Easy Upload"
                description="Drag & drop support"
              />
            </div>

            <ConversionHistory 
              items={conversionHistory}
              onDownload={handleDownload}
              onDelete={handleDelete}
            />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

