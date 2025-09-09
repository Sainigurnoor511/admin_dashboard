"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BusinessSelector } from "@/components/business-selector"
import { Users, Phone, Clock, TrendingUp } from "lucide-react"

const businessUsers = {
  "all-businesses": [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@acme.com",
      role: "Manager",
      callsMade: 245,
      avgDuration: "4.2 min",
      business: "Acme Corporation",
      status: "Active",
      lastCall: "2024-06-06 14:30",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@acme.com",
      role: "Sales Rep",
      callsMade: 189,
      avgDuration: "3.8 min",
      business: "Acme Corporation",
      status: "Active",
      lastCall: "2024-06-06 13:45",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@global.com",
      role: "Support Lead",
      callsMade: 312,
      avgDuration: "5.1 min",
      business: "Global Solutions Inc",
      status: "Active",
      lastCall: "2024-06-06 15:20",
    },
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa.chen@tech.com",
      role: "Developer",
      callsMade: 156,
      avgDuration: "6.2 min",
      business: "Tech Innovations Ltd",
      status: "Active",
      lastCall: "2024-06-06 12:15",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@customer.com",
      role: "Customer Success",
      callsMade: 278,
      avgDuration: "3.9 min",
      business: "Customer First Services",
      status: "Active",
      lastCall: "2024-06-06 16:10",
    },
  ],
  "acme-corp": [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@acme.com",
      role: "Manager",
      callsMade: 245,
      avgDuration: "4.2 min",
      status: "Active",
      lastCall: "2024-06-06 14:30",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@acme.com",
      role: "Sales Rep",
      callsMade: 189,
      avgDuration: "3.8 min",
      status: "Active",
      lastCall: "2024-06-06 13:45",
    },
    {
      id: 6,
      name: "Robert Davis",
      email: "robert.davis@acme.com",
      role: "Support Agent",
      callsMade: 167,
      avgDuration: "4.5 min",
      status: "Active",
      lastCall: "2024-06-06 11:20",
    },
    {
      id: 7,
      name: "Emily Taylor",
      email: "emily.taylor@acme.com",
      role: "Team Lead",
      callsMade: 203,
      avgDuration: "4.0 min",
      status: "Active",
      lastCall: "2024-06-06 10:45",
    },
  ],
  "global-solutions": [
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@global.com",
      role: "Support Lead",
      callsMade: 312,
      avgDuration: "5.1 min",
      status: "Active",
      lastCall: "2024-06-06 15:20",
    },
    {
      id: 8,
      name: "Anna Martinez",
      email: "anna.martinez@global.com",
      role: "Consultant",
      callsMade: 234,
      avgDuration: "4.8 min",
      status: "Active",
      lastCall: "2024-06-06 14:15",
    },
    {
      id: 9,
      name: "James Wilson",
      email: "james.wilson@global.com",
      role: "Account Manager",
      callsMade: 198,
      avgDuration: "5.3 min",
      status: "Active",
      lastCall: "2024-06-06 13:30",
    },
  ],
  "tech-innovations": [
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa.chen@tech.com",
      role: "Developer",
      callsMade: 156,
      avgDuration: "6.2 min",
      status: "Active",
      lastCall: "2024-06-06 12:15",
    },
    {
      id: 10,
      name: "Kevin Park",
      email: "kevin.park@tech.com",
      role: "Product Manager",
      callsMade: 189,
      avgDuration: "5.8 min",
      status: "Active",
      lastCall: "2024-06-06 11:45",
    },
  ],
  "customer-first": [
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@customer.com",
      role: "Customer Success",
      callsMade: 278,
      avgDuration: "3.9 min",
      status: "Active",
      lastCall: "2024-06-06 16:10",
    },
    {
      id: 11,
      name: "Maria Garcia",
      email: "maria.garcia@customer.com",
      role: "Support Specialist",
      callsMade: 223,
      avgDuration: "4.1 min",
      status: "Active",
      lastCall: "2024-06-06 15:30",
    },
  ],
  "enterprise-systems": [
    {
      id: 12,
      name: "Thomas Anderson",
      email: "thomas.anderson@enterprise.com",
      role: "Enterprise Consultant",
      callsMade: 145,
      avgDuration: "7.2 min",
      status: "Active",
      lastCall: "2024-06-06 14:00",
    },
    {
      id: 13,
      name: "Jennifer Lee",
      email: "jennifer.lee@enterprise.com",
      role: "Technical Specialist",
      callsMade: 167,
      avgDuration: "6.8 min",
      status: "Active",
      lastCall: "2024-06-06 13:15",
    },
  ],
}

export default function Business() {
  const [selectedBusiness, setSelectedBusiness] = useState("acme-corp")

  const users = businessUsers[selectedBusiness as keyof typeof businessUsers] || []

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

  const totalUsers = users.length
  const totalCalls = users.reduce((sum, user) => sum + user.callsMade, 0)
  const avgCallsPerUser = totalUsers > 0 ? Math.round(totalCalls / totalUsers) : 0

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Business - {getBusinessDisplayName(selectedBusiness)}</h2>
          <p className="text-muted-foreground">Manage users and their call activity</p>
        </div>
        <BusinessSelector onBusinessChange={setSelectedBusiness} selectedBusiness={selectedBusiness} />
      </div>

      {/* Business Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              {selectedBusiness === "all-businesses" ? "Across all businesses" : "Active users"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCalls.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Calls/User</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgCallsPerUser}</div>
            <p className="text-xs text-muted-foreground">Per user this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8 min</div>
            <p className="text-xs text-muted-foreground">Average call length</p>
          </CardContent>
        </Card>
      </div>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>Users & Call Activity</CardTitle>
          <CardDescription>
            {selectedBusiness === "all-businesses"
              ? "All users across your businesses"
              : `Users in ${getBusinessDisplayName(selectedBusiness)}`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {user.role}
                      </Badge>
                      {selectedBusiness === "all-businesses" && (
                        <Badge variant="secondary" className="text-xs">
                          {(user as any).business}
                        </Badge>
                      )}
                      <Badge variant={user.status === "Active" ? "default" : "secondary"} className="text-xs">
                        {user.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-lg">{user.callsMade}</div>
                  <div className="text-sm text-muted-foreground">calls made</div>
                  <div className="text-xs text-muted-foreground mt-1">Avg: {user.avgDuration}</div>
                  <div className="text-xs text-muted-foreground">Last: {user.lastCall}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
