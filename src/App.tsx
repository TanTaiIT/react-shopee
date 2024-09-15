import userRouteElement from './routers/router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
})
function App() {
  const routerElement = userRouteElement()
  return (
    <QueryClientProvider client={queryClient}>
      {routerElement}
    </QueryClientProvider>
  )
}

export default App
