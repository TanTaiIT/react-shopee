
import { Outlet } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"
type LayoutProps = {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </>
  )
}

