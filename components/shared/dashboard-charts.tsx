"use client"

import { TrendingUp, Phone, Clock, CheckCircle, Users, PhoneCall, Timer } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart, Area, AreaChart, ResponsiveContainer } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data that changes based on business
const businessData = {
  "all-businesses": {
    calls: [
      { month: "Jan", calls: 429 }, // Sum of all businesses
      { month: "Feb", calls: 728 },
      { month: "Mar", calls: 624 },
      { month: "Apr", calls: 574 },
      { month: "May", calls: 701 },
      { month: "Jun", calls: 771 },
    ],
    duration: [
      { month: "Jan", duration: 4.4 }, // Average across all businesses
      { month: "Feb", duration: 4.3 },
      { month: "Mar", duration: 4.5 },
      { month: "Apr", duration: 4.4 },
      { month: "May", duration: 4.5 },
      { month: "Jun", duration: 4.5 },
    ],
    acceptance: [
      { month: "Jan", rate: 86 }, // Average across all businesses
      { month: "Feb", rate: 89 },
      { month: "Mar", rate: 87 },
      { month: "Apr", rate: 91 },
      { month: "May", rate: 92 },
      { month: "Jun", rate: 93 },
    ],
  },
  "acme-corp": {
    calls: [
      { month: "Jan", calls: 186 },
      { month: "Feb", calls: 305 },
      { month: "Mar", calls: 237 },
      { month: "Apr", calls: 173 },
      { month: "May", calls: 209 },
      { month: "Jun", calls: 214 },
    ],
    duration: [
      { month: "Jan", duration: 4.2 },
      { month: "Feb", duration: 3.8 },
      { month: "Mar", duration: 4.5 },
      { month: "Apr", duration: 3.9 },
      { month: "May", duration: 4.1 },
      { month: "Jun", duration: 4.3 },
    ],
    acceptance: [
      { month: "Jan", rate: 85 },
      { month: "Feb", rate: 88 },
      { month: "Mar", rate: 82 },
      { month: "Apr", rate: 90 },
      { month: "May", rate: 87 },
      { month: "Jun", rate: 92 },
    ],
  },
  "global-solutions": {
    calls: [
      { month: "Jan", calls: 145 },
      { month: "Feb", calls: 267 },
      { month: "Mar", calls: 198 },
      { month: "Apr", calls: 234 },
      { month: "May", calls: 289 },
      { month: "Jun", calls: 312 },
    ],
    duration: [
      { month: "Jan", duration: 3.8 },
      { month: "Feb", duration: 4.1 },
      { month: "Mar", duration: 3.9 },
      { month: "Apr", duration: 4.4 },
      { month: "May", duration: 4.0 },
      { month: "Jun", duration: 4.2 },
    ],
    acceptance: [
      { month: "Jan", rate: 78 },
      { month: "Feb", rate: 82 },
      { month: "Mar", rate: 85 },
      { month: "Apr", rate: 88 },
      { month: "May", rate: 91 },
      { month: "Jun", rate: 89 },
    ],
  },
  "tech-innovations": {
    calls: [
      { month: "Jan", calls: 98 },
      { month: "Feb", calls: 156 },
      { month: "Mar", calls: 189 },
      { month: "Apr", calls: 167 },
      { month: "May", calls: 203 },
      { month: "Jun", calls: 245 },
    ],
    duration: [
      { month: "Jan", duration: 5.2 },
      { month: "Feb", duration: 4.9 },
      { month: "Mar", duration: 5.1 },
      { month: "Apr", duration: 4.8 },
      { month: "May", duration: 5.3 },
      { month: "Jun", duration: 5.0 },
    ],
    acceptance: [
      { month: "Jan", rate: 94 },
      { month: "Feb", rate: 96 },
      { month: "Mar", rate: 93 },
      { month: "Apr", rate: 95 },
      { month: "May", rate: 97 },
      { month: "Jun", rate: 98 },
    ],
  },
  "customer-first": {
    calls: [
      { month: "Jan", calls: 120 },
      { month: "Feb", calls: 180 },
      { month: "Mar", calls: 165 },
      { month: "Apr", calls: 145 },
      { month: "May", calls: 190 },
      { month: "Jun", calls: 210 },
    ],
    duration: [
      { month: "Jan", duration: 3.5 },
      { month: "Feb", duration: 3.7 },
      { month: "Mar", duration: 3.8 },
      { month: "Apr", duration: 3.6 },
      { month: "May", duration: 3.9 },
      { month: "Jun", duration: 4.0 },
    ],
    acceptance: [
      { month: "Jan", rate: 88 },
      { month: "Feb", rate: 90 },
      { month: "Mar", rate: 87 },
      { month: "Apr", rate: 92 },
      { month: "May", rate: 89 },
      { month: "Jun", rate: 94 },
    ],
  },
  "enterprise-systems": {
    calls: [
      { month: "Jan", calls: 80 },
      { month: "Feb", calls: 120 },
      { month: "Mar", calls: 135 },
      { month: "Apr", calls: 155 },
      { month: "May", calls: 110 },
      { month: "Jun", calls: 90 },
    ],
    duration: [
      { month: "Jan", duration: 6.1 },
      { month: "Feb", duration: 5.8 },
      { month: "Mar", duration: 6.2 },
      { month: "Apr", duration: 5.9 },
      { month: "May", duration: 6.0 },
      { month: "Jun", duration: 5.7 },
    ],
    acceptance: [
      { month: "Jan", rate: 82 },
      { month: "Feb", rate: 85 },
      { month: "Mar", rate: 88 },
      { month: "Apr", rate: 90 },
      { month: "May", rate: 87 },
      { month: "Jun", rate: 89 },
    ],
  },
}

const callsConfig = {
  calls: {
    label: "Calls",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const durationConfig = {
  duration: {
    label: "Duration (min)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const acceptanceConfig = {
  rate: {
    label: "Acceptance Rate (%)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

interface DashboardChartsProps {
  selectedBusiness: string
}

export function DashboardCharts({ selectedBusiness }: DashboardChartsProps) {
  const data = businessData[selectedBusiness as keyof typeof businessData] || businessData["acme-corp"]

  // Get business name for display
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

  const businessName = getBusinessDisplayName(selectedBusiness)

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
      {/* Total Calls Chart - Larger */}
      <Card className="col-span-full lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Total Calls - {businessName}
          </CardTitle>
          <CardDescription>Number of calls made per month</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={callsConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                accessibilityLayer
                data={data.calls}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} interval={0} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="calls" fill="var(--color-calls)" radius={[4, 4, 0, 0]} maxBarSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            {selectedBusiness === "all-businesses"
              ? "Combined growth across all businesses"
              : "Trending up by 12.5% this month"}{" "}
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {selectedBusiness === "all-businesses"
              ? "Showing total calls across all businesses"
              : "Showing total calls for the last 6 months"}
          </div>
        </CardFooter>
      </Card>

      {/* Average Call Duration Chart - Larger */}
      <Card className="col-span-full lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Average Call Duration - {businessName}
          </CardTitle>
          <CardDescription>Average duration in minutes</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={durationConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                accessibilityLayer
                data={data.duration}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} interval={0} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  dataKey="duration"
                  type="monotone"
                  stroke="var(--color-duration)"
                  strokeWidth={3}
                  dot={true}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            {selectedBusiness === "all-businesses"
              ? "Average 4.4 minutes across all businesses"
              : "Average 4.2 minutes per call"}
          </div>
          <div className="leading-none text-muted-foreground">
            {selectedBusiness === "all-businesses"
              ? "Weighted average across all business units"
              : "Consistent call duration across months"}
          </div>
        </CardFooter>
      </Card>

      {/* Call Acceptance Rate Chart - Full Width */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Call Acceptance Rate - {businessName}
          </CardTitle>
          <CardDescription>Percentage of accepted calls over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={acceptanceConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                accessibilityLayer
                data={data.acceptance}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} interval={0} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                  dataKey="rate"
                  type="natural"
                  fill="var(--color-rate)"
                  fillOpacity={0.4}
                  stroke="var(--color-rate)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            {selectedBusiness === "all-businesses"
              ? "Overall improvement across all businesses"
              : "Trending up by 8.1% this month"}{" "}
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {selectedBusiness === "all-businesses"
              ? "93% average acceptance rate across all businesses"
              : "92% acceptance rate in June"}
          </div>
        </CardFooter>
      </Card>

      {/* Additional Metrics Cards */}
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selectedBusiness === "all-businesses" ? "48" : "12"}</div>
            <p className="text-xs text-muted-foreground">
              {selectedBusiness === "all-businesses" ? "Across all businesses" : "+2 from last month"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Hours</CardTitle>
            <PhoneCall className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2-4 PM</div>
            <p className="text-xs text-muted-foreground">Highest call volume</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selectedBusiness === "all-businesses" ? "1.1s" : "1.2s"}</div>
            <p className="text-xs text-muted-foreground">
              {selectedBusiness === "all-businesses" ? "Average across all" : "-0.3s from last month"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selectedBusiness === "all-businesses" ? "4.7/5" : "4.8/5"}</div>
            <p className="text-xs text-muted-foreground">
              {selectedBusiness === "all-businesses" ? "Overall rating" : "+0.2 from last month"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
