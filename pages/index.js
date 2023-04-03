import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Pass from './pass'
export default function Home() {
  return (
    <>
     <Pass/>
    </>
  )
}
