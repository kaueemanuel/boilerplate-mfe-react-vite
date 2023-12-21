import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./lib/i18n.ts"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider as ThemeProviderEmotion } from "@emotion/react"
import { ThemeProvider as ThemeProviderMUI } from "@mui/material"
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider"
import { CssBaseline } from "@mui/material"
import { Global } from "@emotion/react"

import theme from "./theme"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import globalStyle from "./globalStyles.ts"

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <ThemeProviderEmotion theme={theme}>
      <ThemeProviderMUI theme={theme}>
        {children}
      </ThemeProviderMUI>
    </ThemeProviderEmotion>
  )
}


const Main = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={globalStyle} />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

export default Main