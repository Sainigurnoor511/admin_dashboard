import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Volume2 } from "lucide-react"

const voices = [
  {
    id: 1,
    name: "Aria",
    gender: "Female",
    accent: "American",
    language: "English",
    description: "Warm and professional voice perfect for customer service",
    category: "Professional",
    sampleUrl: "#",
  },
  {
    id: 2,
    name: "Marcus",
    gender: "Male",
    accent: "British",
    language: "English",
    description: "Sophisticated and articulate voice for formal communications",
    category: "Professional",
    sampleUrl: "#",
  },
  {
    id: 3,
    name: "Sofia",
    gender: "Female",
    accent: "Spanish",
    language: "Spanish",
    description: "Friendly and approachable voice for customer engagement",
    category: "Conversational",
    sampleUrl: "#",
  },
  {
    id: 4,
    name: "James",
    gender: "Male",
    accent: "Australian",
    language: "English",
    description: "Casual and friendly voice for informal conversations",
    category: "Conversational",
    sampleUrl: "#",
  },
  {
    id: 5,
    name: "Yuki",
    gender: "Female",
    accent: "Japanese",
    language: "Japanese",
    description: "Clear and polite voice for Japanese communications",
    category: "International",
    sampleUrl: "#",
  },
  {
    id: 6,
    name: "Pierre",
    gender: "Male",
    accent: "French",
    language: "French",
    description: "Elegant and refined voice for French communications",
    category: "International",
    sampleUrl: "#",
  },
]

export default function Voices() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Voices</h2>
        <p className="text-muted-foreground">Choose from our collection of AI voices and accents</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {voices.map((voice) => (
          <Card key={voice.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{voice.name}</CardTitle>
                  <CardDescription>
                    {voice.gender} • {voice.accent}
                  </CardDescription>
                </div>
                <Volume2 className="w-5 h-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Language</span>
                <Badge variant="outline">{voice.language}</Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Category</span>
                <Badge variant="secondary">{voice.category}</Badge>
              </div>

              <p className="text-sm text-muted-foreground">{voice.description}</p>

              <Button variant="outline" size="sm" className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Play Sample
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
