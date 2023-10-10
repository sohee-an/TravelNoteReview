import User from '@/pages/User/User';
import Login from '@/pages/auth/Login/Login';
import Register from '@/pages/auth/Register/Register';
import Trip from '@/pages/trip/Trip/Trip';
import TripDetail from '@/pages/trip/TripDetail/TripDetail';
import TripPlan from '@components/units/user/TripPlan/TripPlan';
interface RouteProps {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}
const userRoutes: Array<RouteProps> = [
  { path: '/', component: <User /> },
  { path: '/user/:uid', component: <User /> },
  { path: '/trip/:tid', component: <Trip /> },
  { path: '/trip/:tid/:tcontentsid/detail', component: <TripDetail /> },
  { path: '/trip/plan', component: <TripPlan /> },
];
const authRoutes: Array<RouteProps> = [
  { path: '/login', component: <Login /> },
  // { path: '/logout', component: <Logout /> },
  { path: '/register', component: <Register /> },
  // { path: '/recoverpw', component: <ForgetPassword /> },
];
export { userRoutes, authRoutes };
