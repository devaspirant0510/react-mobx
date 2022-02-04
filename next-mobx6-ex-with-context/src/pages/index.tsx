import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import MyHooks from "../component/MyHooks";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MyHooks/>
    </div>
  )
}

export default Home
