import Navbar from "@/components/Navbar"

const Layout = ({ children }) => {
    return (
      <div className="bg-[#E2E4DA]">
        <Navbar/>
        {children}
      </div>
    )
  }
  
  export default Layout