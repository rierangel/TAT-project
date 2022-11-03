import 'src/styles/main.scss'
// import 'src/lib/scripts/ImgsUrl'
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


