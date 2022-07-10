import React from 'react'
import App from './App'
import { ResetCSS } from './global/resetCSS'
import GithubProvider from './providers/github-provider'

function providers() {


    return (
        <main>
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>
    )
}

export default providers