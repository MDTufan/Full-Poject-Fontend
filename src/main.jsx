import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './ParentContext/Context.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Context>
      <App />
      <Toaster />
    </Context>
    </QueryClientProvider>
  </React.StrictMode>,
)
