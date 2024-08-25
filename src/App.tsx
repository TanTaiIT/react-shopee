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
    <div>
      <QueryClientProvider client={queryClient}>
        {routerElement}
      </QueryClientProvider>
    </div>
  )
}

export default App
