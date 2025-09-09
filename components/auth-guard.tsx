"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
      setIsAuthenticated(isLoggedIn)

      // If not authenticated and not on login/signup pages, redirect to login
      if (!isLoggedIn && pathname !== "/login" && pathname !== "/signup") {
        router.push("/login")
      }
    }

    checkAuth()
  }, [router, pathname])

  // Show loading or nothing while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  // If on login/signup pages, show them regardless of auth status
  if (pathname === "/login" || pathname === "/signup") {
    return <>{children}</>
  }

  // If authenticated, show the protected content
  if (isAuthenticated) {
    return <>{children}</>
  }

  // If not authenticated, don't render anything (redirect will happen)
  return null
}
