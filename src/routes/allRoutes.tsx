import User from '@/pages/User/User';
import Trip from '@/pages/trip/Trip/Trip';
import TripDetail from '@/pages/trip/TripDetail/TripDetail';
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
];
export { userRoutes };
