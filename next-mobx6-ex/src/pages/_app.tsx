import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider,inject} from "mobx-react"
import {useEffect} from "react";
import {useStore} from "../store/RootStore";

function MyApp({ Component, pageProps }: AppProps) {
    const store = useStore(pageProps.initalState)
    useEffect(()=>{
        console.log(pageProps.initalState)

    },[])
  return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
