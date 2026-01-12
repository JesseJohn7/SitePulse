"use client"
import AppHeader from '@/app/_components/AppHeader'
import React, { use } from 'react'

const DashboardProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='px-10'>
        <AppHeader />
        {children}
    </div>
  )
}

export default DashboardProvider