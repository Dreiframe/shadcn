import './App.css'

import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from './components/site-header'
import DualContainer from './components/dual-container'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SiteHeader/>
      <DualContainer/>
    </ThemeProvider>
  )
}
export default App
