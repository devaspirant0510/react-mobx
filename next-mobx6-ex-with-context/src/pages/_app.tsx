import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import {RootStoreProvider} from "../context/useProvider";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <RootStoreProvider hydrationData={pageProps.hydrationData}>
            <Component {...pageProps} />
        </RootStoreProvider>
    )
}

export default MyApp
