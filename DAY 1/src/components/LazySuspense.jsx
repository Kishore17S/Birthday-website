import PropTypes from 'prop-types'
import { Suspense } from "react"
import loader from '../assets/images/Fallback.gif'
import ErrorBoundary from './ErrorBoundary'

const LazySuspense = ({component:Component,...rest}) => {
  return (
    <Suspense fallback={<img src={loader} alt='loader'/>}>
    <Component {...rest}/>
    </Suspense>

    )
    
}
LazySuspense.protoTypes={
    component: PropTypes.element.isRequired
  }

export default LazySuspense
