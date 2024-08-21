import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { SnackbarProvider } from 'notistack';
export default function App(props) {
    const store = setupStore()

    return (
        <>
            <Provider store={store}>
                <SnackbarProvider maxSnack={7}>
                    <AppRouter {...props} />
                </SnackbarProvider>
            </Provider>
        </>
    );
}