import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'lowwhisper',
  description: 'Developing software for those called.',
  authors: {name: 'Noah'},
  keywords: [
    'Faith', 'Website', 'Christian Web Development', 'technology',
    'Christ-Centered Web Design', 'Christian Coding', 'Gospel', 'Prayer'
  ],
}

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark bg-background" >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        
        <div className='dark text-foreground bg-mtn bg-center bg-cover lg:w-screen lg:h-screen '>
          <Navbar />
          <main>
            {children}
          </main>
        </div>

      </body>

      <form hidden netlify-data="true" name="contact" method="POST" >
      <input type="radio" id="prayer" name="prayer" value="prayer" />
      <input type="radio" id="service" name="service" value="service" />
      <input type="radio" id="other" name="other" value="other" />
      <input type="text" id="name" name="name" />
      <input type="email" id="email" name="email" />
      <input type="telephone" id="telephone" name="telephone" />
      <textarea id="message" name="message"></textarea>
      </form>

    </html>
  )
}
