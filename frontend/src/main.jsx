import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "react-query"  
import { AuthContexProvider } from './authContext.jsx';
//import './index.css'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthContexProvider>
    <App />
    </AuthContexProvider>
    </QueryClientProvider>
)
