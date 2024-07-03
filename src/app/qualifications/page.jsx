import React from 'react'
import styles from "./Qualifications.module.css"
import Qualification from '@/components/qualification/Qualification'
import Link from 'next/link'

export default function Page() {
  return (
    <>
    <Link href="/" className="nav">Back to Home</Link>
    <Qualification/>
    </>
  )
}
