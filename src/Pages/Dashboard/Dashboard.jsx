import { useSelector } from 'react-redux'

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token)

  return (
    <div>
      Dashboard
      Token: {token}  
    </div>
  )
}

export default Dashboard