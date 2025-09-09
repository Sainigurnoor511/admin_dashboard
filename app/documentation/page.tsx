import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, Code, Zap, Shield, Headphones } from "lucide-react"

const docSections = [
  {
    title: "Getting Started",
    description: "Learn the basics of setting up and using AI Dialer",
    icon: Zap,
    articles: ["Quick Start Guide", "Authentication Setup", "Making Your First Call", "Understanding Voice Agents"],
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Code,
    articles: ["REST API Overview", "WebSocket API", "Webhook Events", "Error Handling"],
  },
  {
    title: "Voice Configuration",
    description: "Configure voices, agents, and call flows",
    icon: Headphones,
    articles: ["Voice Selection Guide", "Agent Configuration", "Call Flow Design", "Language Support"],
  },
  {
    title: "Security & Compliance",
    description: "Security best practices and compliance information",
    icon: Shield,
    articles: ["Security Overview", "Data Privacy", "GDPR Compliance", "SOC 2 Certification"],
  },
]

export default function Documentation() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Documentation</h2>
          <p className="text-muted-foreground">Everything you need to know about using AI Dialer</p>
        </div>
        <Button variant="outline">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Full Docs
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {docSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <section.icon className="w-5 h-5" />
                <CardTitle>{section.title}</CardTitle>
              </div>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {section.articles.map((article) => (
                  <div
                    key={article}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer"
                  >
                    <span className="text-sm">{article}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Popular Resources
          </CardTitle>
          <CardDescription>Most accessed documentation and guides</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-medium">Quick Start</h4>
              <p className="text-sm text-muted-foreground">Get up and running in 5 minutes</p>
              <Badge variant="secondary">Beginner</Badge>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">API Integration</h4>
              <p className="text-sm text-muted-foreground">Integrate AI Dialer into your app</p>
              <Badge variant="secondary">Intermediate</Badge>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Advanced Workflows</h4>
              <p className="text-sm text-muted-foreground">Complex call routing and logic</p>
              <Badge variant="secondary">Advanced</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
