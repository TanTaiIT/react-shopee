import Footer from "../../components/footer"
import { Outlet } from "react-router-dom"
import Header from "../../components/main/Header"
interface Props {
  children?: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout