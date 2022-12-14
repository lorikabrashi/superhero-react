import Error from '../../Pages/Error'
import ForgotPassword from '../../Pages/ForgotPassword'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Register from '../../Pages/Register/Register'
import ResetPassword from '../../Pages/ResetPassword'
import VerifyAccount from '../../Pages/VerifyAccount/VerifyAccount'
import Dashboard from '../../Pages/Dashboard'
import Profile from '../../Pages/Profile/Profile'
import Superheros from '../../Pages/Superheros'
import EditSuperheros from '../../Pages/EditSuperheros/EditSuperheros'
import SingleSuperhero from '../../Pages/SingleSuperhero'

export const routeData = {
  public: [
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'verify',
      element: <VerifyAccount />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: 'reset-password',
      element: <ResetPassword />,
    },
  ],
  exposed: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ],
  admin: [
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/edit-superheros',
      element: <EditSuperheros />,
    },
    {
      path: '/superhero/:superheroId',
      element: <SingleSuperhero />,
    },
    {
      path: '/admin-profile',
      element: <Profile />,
    },
  ],
  user: [
    {
      path: '/user-profile',
      element: <Profile />,
    },
    {
      path: '/superheros',
      element: <Superheros />,
    },
  ],
}
