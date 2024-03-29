import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Hero } from '@/components/SectionHero'
import { SectionOne } from '@/components/SectionOne'
import { SectionTwoo } from '@/components/SectionTwoo'
import { SectionThree } from '@/components/SectionThree'
import { SectionFour } from '@/components/SectionFour'
import { SectionFive } from '@/components/SectionFive'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
  })

export const metadata: Metadata = {
  title: 'De Figueiredo - Serviços Financeiros',
  description: 'Descubra a solução financeira ideal para você com nosso empréstimo consignado.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>        
        {children}
        </body>
    </html>
  )
}
