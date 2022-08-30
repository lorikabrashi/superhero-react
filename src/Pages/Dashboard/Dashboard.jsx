import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../lib/store/slices/auth'
const Dashboard = () => {
  const auth = useSelector((state) => state.auth.data)
  const dispatch = useDispatch()
  return (
    <div>
      Dashboard Token: {auth.token}
      <button
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Dashboard
