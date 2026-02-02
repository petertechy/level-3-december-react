import React from 'react'
import { Loader2 } from 'lucide-react'

export const Loading = () => {
  return (
      <div>
            <Loader2 
            size={32}
            style={{ animation: "spin 1s linear infinite" }} />
          </div>
  )
}
4