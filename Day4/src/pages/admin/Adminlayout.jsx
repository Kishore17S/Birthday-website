import  PropTypes from 'prop-types'

const Adminlayout = ({children}) => {
  return (
    <div>
    <aside>
        Sidebar
    </aside>
    <main>
        {children}
    </main>
      
    </div>
  )
}

Adminlayout.propTypes={
    children: PropTypes.node.isRequired
}

export default Adminlayout
