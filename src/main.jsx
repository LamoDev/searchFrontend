import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { store } from './components/store/store'


const theme = createTheme({
  
  palette: {
    orange: {
      main: '#db3b1c',
      contrastText: '#ffffff',
    },
  },
  typography: {
    button: {
      fontFamily: 'IBM',
    },
   
    fontFamily: 'IBM',
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        root: {
          fontFamily: 'IBM',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'IBM',
          fontSize: '16px', 
        },
      },
    },
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
    <Provider store={store}>
    <App />
    </Provider>
  </ThemeProvider>
  </StrictMode>,
)
