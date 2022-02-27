import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BookmarkProvider from 'context/bookmark'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BookmarkProvider>
      <Component {...pageProps} />
    </BookmarkProvider>
  )
}

export default MyApp
