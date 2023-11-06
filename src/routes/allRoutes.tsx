import TripPlan from '@components/units/user/TripPlan';
import Login from '@/pages/auth/Login/Login';
import Register from '@/pages/auth/Register';
import CreateDetailTrip from '@/pages/trip/CreateDetailTrip/CreateDetailTrip';
import CreateTrip from '@/pages/trip/CreateTrip/CreateTrip';
import Trip from '@/pages/trip/Trip';
import TripDetail from '@/pages/trip/TripDetail';
import User from '@/pages/User';

interface RouteProps {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}
const userRoutes: Array<RouteProps> = [
  { path: '/', component: <User /> },
  { path: '/user/:uid', component: <User /> },
  { path: '/trip/:tid', component: <Trip /> },
  { path: '/createTrip', component: <CreateTrip /> },
  { path: '/createDetailTrip/:tid', component: <CreateDetailTrip /> },
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
