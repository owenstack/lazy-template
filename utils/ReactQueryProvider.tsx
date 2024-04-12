'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from 'react'

export function ReactQueryProvider({children} : {children : React.ReactNode}) {
    const [queryClient] = React.useState(
        new QueryClient({defaultOptions: {queries: {staleTime: 5000}}})
    )
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}