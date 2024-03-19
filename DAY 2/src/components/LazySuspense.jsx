import PropTypes from 'prop-types'
import { Suspense } from "react"
import loader from '../assets/images/Fallback.gif'
import ErrorBoundary from './ErrorBoundary'

const LazySuspense = ({component:Component,...rest}) => {
  return (
    <ErrorBoundary>
    <Suspense fallback={<img src={loader} alt='loader'/>}>
    <Component {...rest}/>
    </Suspense>
    </ErrorBoundary>

    )
    
}
LazySuspense.protoTypes={
    component: PropTypes.element.isRequired
  }

export default LazySuspense
