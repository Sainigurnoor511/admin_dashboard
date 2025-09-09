"use client"

import { useState } from "react"
import { DashboardStats } from "@/components/dashboard-stats"
import { DashboardCharts } from "@/components/dashboard-charts"
import { BusinessSelector } from "@/components/business-selector"

export default function Dashboard() {
  const [selectedBusiness, setSelectedBusiness] = useState("acme-corp")

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Good Afternoon Priyal</h2>
          <p className="text-muted-foreground">Here's what's happening with your voice AI today.</p>
        </div>
        <div className="flex items-center space-x-4">
          <BusinessSelector onBusinessChange={setSelectedBusiness} selectedBusiness={selectedBusiness} />
        </div>
      </div>

      <DashboardStats />
      <DashboardCharts selectedBusiness={selectedBusiness} />
    </div>
  )
}
