import React from "react";
import { Header } from "./Header"
import { Footer } from "./Footer/index"
import 'styles/globals.scss'


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
