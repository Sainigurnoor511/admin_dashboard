"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BusinessSelector } from "@/components/business-selector"

const agentsByBusiness = {
  "all-businesses": [
    // All agents from all businesses
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Customer Support Agent",
      languages: ["English", "Spanish", "French"],
      status: "Active",
      callsHandled: 1247,
      rating: 4.8,
      business: "Acme Corporation",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Sales Agent",
      languages: ["English", "Mandarin", "Cantonese"],
      status: "Active",
      callsHandled: 892,
      rating: 4.9,
      business: "Acme Corporation",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Technical Support Agent",
      languages: ["English", "Spanish", "Portuguese"],
      status: "Offline",
      callsHandled: 634,
      rating: 4.7,
      business: "Global Solutions Inc",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Customer Success Agent",
      languages: ["English", "Korean", "Japanese"],
      status: "Active",
      callsHandled: 1156,
      rating: 4.9,
      business: "Global Solutions Inc",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Technical Support",
      languages: ["English", "Mandarin"],
      status: "Active",
      callsHandled: 823,
      rating: 4.6,
      business: "Tech Innovations Ltd",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Sales Representative",
      languages: ["English"],
      status: "Active",
      callsHandled: 945,
      rating: 4.8,
      business: "Customer First Services",
    },
  ],
  "acme-corp": [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Customer Support Agent",
      languages: ["English", "Spanish", "French"],
      status: "Active",
      callsHandled: 1247,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Sales Agent",
      languages: ["English", "Mandarin", "Cantonese"],
      status: "Active",
      callsHandled: 892,
      rating: 4.9,
    },
    {
      id: 7,
      name: "Anna Smith",
      role: "Technical Support",
      languages: ["English", "German"],
      status: "Active",
      callsHandled: 567,
      rating: 4.7,
    },
  ],
  "global-solutions": [
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Technical Support Agent",
      languages: ["English", "Spanish", "Portuguese"],
      status: "Offline",
      callsHandled: 634,
      rating: 4.7,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Customer Success Agent",
      languages: ["English", "Korean", "Japanese"],
      status: "Active",
      callsHandled: 1156,
      rating: 4.9,
    },
    {
      id: 8,
      name: "Carlos Martinez",
      role: "Sales Agent",
      languages: ["English", "Spanish"],
      status: "Active",
      callsHandled: 789,
      rating: 4.8,
    },
  ],
  "tech-innovations": [
    {
      id: 5,
      name: "Lisa Wang",
      role: "Technical Support",
      languages: ["English", "Mandarin"],
      status: "Active",
      callsHandled: 823,
      rating: 4.6,
    },
    {
      id: 9,
      name: "Robert Taylor",
      role: "Product Specialist",
      languages: ["English"],
      status: "Active",
      callsHandled: 456,
      rating: 4.9,
    },
  ],
  "customer-first": [
    {
      id: 6,
      name: "James Wilson",
      role: "Sales Representative",
      languages: ["English"],
      status: "Active",
      callsHandled: 945,
      rating: 4.8,
    },
    {
      id: 10,
      name: "Maria Garcia",
      role: "Customer Support",
      languages: ["English", "Spanish"],
      status: "Active",
      callsHandled: 678,
      rating: 4.7,
    },
  ],
  "enterprise-systems": [
    {
      id: 11,
      name: "Thomas Anderson",
      role: "Enterprise Consultant",
      languages: ["English"],
      status: "Active",
      callsHandled: 234,
      rating: 4.9,
    },
    {
      id: 12,
      name: "Jennifer Lee",
      role: "Technical Specialist",
      languages: ["English", "Korean"],
      status: "Active",
      callsHandled: 345,
      rating: 4.8,
    },
  ],
}

export default function Agents() {
  const [selectedBusiness, setSelectedBusiness] = useState("acme-corp")

  const agents = agentsByBusiness[selectedBusiness as keyof typeof agentsByBusiness] || []

  const getBusinessDisplayName = (businessKey: string) => {
    const businessNames = {
      "all-businesses": "All Businesses",
      "acme-corp": "Acme Corporation",
      "global-solutions": "Global Solutions Inc",
      "tech-innovations": "Tech Innovations Ltd",
      "customer-first": "Customer First Services",
      "enterprise-systems": "Enterprise Systems Co",
    }
    return businessNames[businessKey as keyof typeof businessNames] || "Selected Business"
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Agents - {getBusinessDisplayName(selectedBusiness)}</h2>
          <p className="text-muted-foreground">Manage your AI agents and their capabilities</p>
        </div>
        <BusinessSelector onBusinessChange={setSelectedBusiness} selectedBusiness={selectedBusiness} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>
                    {agent.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{agent.name}</CardTitle>
                  <CardDescription>{agent.role}</CardDescription>
                  {selectedBusiness === "all-businesses" && (
                    <Badge variant="outline" className="mt-1 text-xs">
                      {(agent as any).business}
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status</span>
                <Badge variant={agent.status === "Active" ? "default" : "secondary"}>{agent.status}</Badge>
              </div>

              <div>
                <span className="text-sm font-medium">Languages</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {agent.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Calls Handled</span>
                  <p className="font-medium">{agent.callsHandled.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Rating</span>
                  <p className="font-medium">{agent.rating}/5.0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
