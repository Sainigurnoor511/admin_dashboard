"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Building2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const businesses = [
  {
    value: "all-businesses",
    label: "All Businesses",
    industry: "Combined View",
  },
  {
    value: "acme-corp",
    label: "Acme Corporation",
    industry: "Technology",
  },
  {
    value: "global-solutions",
    label: "Global Solutions Inc",
    industry: "Consulting",
  },
  {
    value: "tech-innovations",
    label: "Tech Innovations Ltd",
    industry: "Software",
  },
  {
    value: "customer-first",
    label: "Customer First Services",
    industry: "Support",
  },
  {
    value: "enterprise-systems",
    label: "Enterprise Systems Co",
    industry: "Enterprise",
  },
]

interface BusinessSelectorProps {
  onBusinessChange: (business: string) => void
  selectedBusiness?: string
}

export function BusinessSelector({ onBusinessChange, selectedBusiness = "acme-corp" }: BusinessSelectorProps) {
  const [open, setOpen] = React.useState(false)

  const selectedBusinessData = businesses.find((business) => business.value === selectedBusiness)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[300px] justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <div className="flex flex-col items-start">
              <span className="font-medium">{selectedBusinessData?.label || "Select business..."}</span>
              {selectedBusinessData?.industry && (
                <span className="text-xs text-muted-foreground">{selectedBusinessData.industry}</span>
              )}
            </div>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search business..." />
          <CommandList>
            <CommandEmpty>No business found.</CommandEmpty>
            <CommandGroup>
              {businesses.map((business) => (
                <CommandItem
                  key={business.value}
                  value={business.value}
                  onSelect={(currentValue) => {
                    onBusinessChange(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn("mr-2 h-4 w-4", selectedBusiness === business.value ? "opacity-100" : "opacity-0")}
                  />
                  <div className="flex flex-col">
                    <span className={business.value === "all-businesses" ? "font-semibold" : ""}>{business.label}</span>
                    <span className="text-sm text-muted-foreground">{business.industry}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
