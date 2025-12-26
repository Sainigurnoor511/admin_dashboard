import type React from "react"
import type { Metadata } from "next"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/shared/theme-provider"
import { AuthGuard } from "@/components/shared/auth-guard"
import { ConditionalLayout } from "@/components/shared/conditional-layout"

export const metadata: Metadata = {
  title: "AI Dialer Admin Dashboard",
  description: "Voice AI Admin Dashboard",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="pt-sans-regular">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthGuard>
            <ConditionalLayout>{children}</ConditionalLayout>
          </AuthGuard>
        </ThemeProvider>
      </body>
    </html>
  )
}
