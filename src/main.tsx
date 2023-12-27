import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./lib/i18n.ts"
import { BrowserRouter } from "react-router-dom"
import { CssBaseline } from "boilerplate-ui-mui-storybook/material"
import { Global } from "@emotion/react"
import { ThemeProvider } from "boilerplate-ui-mui-storybook/themes"

import theme from "./theme"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import globalStyle from "./globalStyles.ts"

const Main = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme.lightTheme}>
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