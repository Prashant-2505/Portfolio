'use client'

import { ThemeContextProvider } from "./context/theme"


const Providers = ({ children }) => {
    return <ThemeContextProvider>{children}</ThemeContextProvider>
}

export default Providers