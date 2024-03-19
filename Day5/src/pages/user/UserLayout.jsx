import PropTypes from "prop-types"
import Footer from "../../components/Footer.jsx"
import Navbar from "../../components/navbar.jsx"

const UserLayout = ({children}) => {
    return(
        <div>
           <Navbar />
            <main>
            {children}
            </main>
            <Footer />
        </div>
    )
}
UserLayout.propTypes = {
    children:PropTypes.node.isRequired
}
export default UserLayout