import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex items-center justify-center min-h-svh'>{children}</div>
  )
}

export default layout