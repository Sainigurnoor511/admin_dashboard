"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BusinessSelector } from "@/components/business-selector"
import { CreditCard, Clock, Calendar, DollarSign } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const billingData = {
  "all-businesses": {
    currentPlan: "Enterprise",
    monthlyLimit: 10000,
    minutesUsed: 7845,
    monthlyCost: 2499,
    nextBilling: "2024-07-06",
    paymentMethod: "•••• •••• •••• 4242",
    usage: [
      { business: "Acme Corporation", minutes: 2340, cost: 702 },
      { business: "Global Solutions Inc", minutes: 1890, cost: 567 },
      { business: "Tech Innovations Ltd", minutes: 1456, cost: 437 },
      { business: "Customer First Services", minutes: 1234, cost: 370 },
      { business: "Enterprise Systems Co", minutes: 925, cost: 278 },
    ],
  },
  "acme-corp": {
    currentPlan: "Professional",
    monthlyLimit: 2500,
    minutesUsed: 2340,
    monthlyCost: 749,
    nextBilling: "2024-07-06",
    paymentMethod: "•••• •••• •••• 4242",
  },
  "global-solutions": {
    currentPlan: "Professional",
    monthlyLimit: 2000,
    minutesUsed: 1890,
    monthlyCost: 599,
    nextBilling: "2024-07-06",
    paymentMethod: "•••• •••• •••• 5678",
  },
  "tech-innovations": {
    currentPlan: "Starter",
    monthlyLimit: 1500,
    minutesUsed: 1456,
    monthlyCost: 299,
    nextBilling: "2024-07-06",
    paymentMethod: "•••• •••• •••• 9012",
  },
  "customer-first": {
    currentPlan: "Professional",
    monthlyLimit: 1800,
    minutesUsed: 1234,
    monthlyCost: 549,
    nextBilling: "2024-07-06",
    paymentMethod: "•••• •••• •••• 3456",
  },
  "enterprise-systems": {
    currentPlan: "Starter",
    monthlyLimit: 1000,
    minutesUsed: 925,
    monthlyCost: 199,
    nextBilling: "2024-07-06",
    paymentMethod: "•••• •••• •••• 7890",
  },
}

export default function Billing() {
  const [selectedBusiness, setSelectedBusiness] = useState("acme-corp")

  const billing = billingData[selectedBusiness as keyof typeof billingData]

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

  const usagePercentage = (billing.minutesUsed / billing.monthlyLimit) * 100
  const remainingMinutes = billing.monthlyLimit - billing.minutesUsed

  const getPlanBadgeVariant = (plan: string) => {
    switch (plan) {
      case "Enterprise":
        return "default"
      case "Professional":
        return "secondary"
      case "Starter":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Billing - {getBusinessDisplayName(selectedBusiness)}</h2>
          <p className="text-muted-foreground">Manage your subscription and usage</p>
        </div>
        <BusinessSelector onBusinessChange={setSelectedBusiness} selectedBusiness={selectedBusiness} />
      </div>

      {/* Billing Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{billing.currentPlan}</div>
            <Badge variant={getPlanBadgeVariant(billing.currentPlan)} className="mt-2">
              Active
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Minutes Used</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{billing.minutesUsed.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">of {billing.monthlyLimit.toLocaleString()} minutes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${billing.monthlyCost}</div>
            <p className="text-xs text-muted-foreground">This billing cycle</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Billing</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{billing.nextBilling}</div>
            <p className="text-xs text-muted-foreground">Auto-renewal</p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Usage This Month</CardTitle>
          <CardDescription>Your current usage and remaining minutes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Minutes Used</span>
              <span>
                {billing.minutesUsed.toLocaleString()} / {billing.monthlyLimit.toLocaleString()}
              </span>
            </div>
            <Progress value={usagePercentage} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{usagePercentage.toFixed(1)}% used</span>
              <span>{remainingMinutes.toLocaleString()} minutes remaining</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Breakdown for All Businesses */}
      {selectedBusiness === "all-businesses" && (
        <Card>
          <CardHeader>
            <CardTitle>Usage by Business</CardTitle>
            <CardDescription>Breakdown of usage across all your businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {billing.usage?.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">{item.business}</div>
                    <div className="text-sm text-muted-foreground">{item.minutes.toLocaleString()} minutes</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${item.cost}</div>
                    <div className="text-sm text-muted-foreground">this month</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Payment Method & Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Your current payment method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4" />
                <span>{billing.paymentMethod}</span>
              </div>
              <Button variant="outline" size="sm">
                Update
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plan Management</CardTitle>
            <CardDescription>Upgrade or modify your plan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Button className="w-full">Upgrade Plan</Button>
              <Button variant="outline" className="w-full">
                View Billing History
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
