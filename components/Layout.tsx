import Head from 'next/head'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  title: string
  className?: string
  children: ReactNode
}

const Layout = ({ title, className, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`container mt-4 w-11/12 md:w-full ${className}`}>
        {children}
      </main>
    </>
  )
}

export default Layout
