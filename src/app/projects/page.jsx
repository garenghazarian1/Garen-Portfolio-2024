import MyProjects from "@/components/projects/MyProjects"
import styles from "./Projects.module.css"
import Link from "next/link"

export default function Projects() {
  return (
    <>
    <Link href="/" className="nav" >Back to Home</Link>
    <MyProjects/>
    </>
  )
}
