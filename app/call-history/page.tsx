import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Phone, Clock, Calendar, Download } from "lucide-react"

const callHistory = [
  {
    id: "CALL-001",
    date: "2024-06-06",
    time: "14:30",
    duration: "4:32",
    caller: "+1 (555) 123-4567",
    agent: "Sarah Johnson",
    status: "Completed",
    outcome: "Resolved",
    recording: true,
  },
  {
    id: "CALL-002",
    date: "2024-06-06",
    time: "13:45",
    duration: "2:18",
    caller: "+1 (555) 987-6543",
    agent: "Michael Chen",
    status: "Completed",
    outcome: "Follow-up Required",
    recording: true,
  },
  {
    id: "CALL-003",
    date: "2024-06-06",
    time: "12:15",
    duration: "6:45",
    caller: "+1 (555) 456-7890",
    agent: "Emma Rodriguez",
    status: "Completed",
    outcome: "Escalated",
    recording: true,
  },
  {
    id: "CALL-004",
    date: "2024-06-06",
    time: "11:30",
    duration: "1:23",
    caller: "+1 (555) 321-0987",
    agent: "David Kim",
    status: "Missed",
    outcome: "No Answer",
    recording: false,
  },
  {
    id: "CALL-005",
    date: "2024-06-05",
    time: "16:20",
    duration: "3:56",
    caller: "+1 (555) 654-3210",
    agent: "Sarah Johnson",
    status: "Completed",
    outcome: "Resolved",
    recording: true,
  },
]

export default function CallHistory() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Call History</h2>
        <p className="text-muted-foreground">Complete history of all calls for your business</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4:12</div>
            <p className="text-xs text-muted-foreground">+0:23 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Calls</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">4 in progress</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Calls</CardTitle>
          <CardDescription>Your most recent call activity</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Call ID</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Caller</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Outcome</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {callHistory.map((call) => (
                <TableRow key={call.id}>
                  <TableCell className="font-medium">{call.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{call.date}</span>
                      <span className="text-sm text-muted-foreground">{call.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>{call.duration}</TableCell>
                  <TableCell>{call.caller}</TableCell>
                  <TableCell>{call.agent}</TableCell>
                  <TableCell>
                    <Badge variant={call.status === "Completed" ? "default" : "destructive"}>{call.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        call.outcome === "Resolved"
                          ? "default"
                          : call.outcome === "Follow-up Required"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {call.outcome}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {call.recording && (
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
