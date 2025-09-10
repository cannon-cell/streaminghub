"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    // Redirect to the main HTML application
    window.location.href = "/index.html"
  }, [])

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#e3e7ee] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">🎬 StreamingHub</h1>
        <p className="text-[#a1a9b8] mb-4">Przekierowywanie do aplikacji...</p>
        <div className="animate-spin w-6 h-6 border-2 border-[#4f7cff] border-t-transparent rounded-full mx-auto"></div>
      </div>
    </div>
  )
}
