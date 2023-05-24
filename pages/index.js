
import { Inter } from 'next/font/google'

import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-5xl'>
      <Link href={'/users'}> 
      
            go to users Page !
         
      </Link>
      <Link href={'/episodes'}> 
    
            go to Episodes Page
          
      </Link>

    </div>
  )
}
