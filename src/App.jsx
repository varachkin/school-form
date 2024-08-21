import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
export default function App(props) {
    const store = setupStore()

    const darkTheme = createTheme({
        palette: {
            mode: 'light',
        },
        // You can further customize the theme here
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            color: 'white'
        },
    });


    return (
        <>
            <ThemeProvider theme={darkTheme}>
            <CssBaseline />
                <Provider store={store}>
                    <SnackbarProvider maxSnack={7}>
                        <AppRouter {...props} />
                    </SnackbarProvider>
                </Provider>
            </ThemeProvider>
        </>
    );
}