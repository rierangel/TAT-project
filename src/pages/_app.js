import 'src/styles/tailwind.scss'
import 'src/styles/globals.scss'
import 'src/styles/tags.scss'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
}

export default MyApp
