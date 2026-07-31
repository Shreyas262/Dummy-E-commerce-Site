import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}>
          
        </RouterProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)
