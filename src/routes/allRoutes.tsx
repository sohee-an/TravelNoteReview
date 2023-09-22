import User from '@/pages/User/User';
import Trip from '@/pages/trip/Trip/Trip';
interface RouteProps {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}
const userRoutes: Array<RouteProps> = [
  { path: '/', component: <User /> },
  { path: '/user/:uid', component: <User /> },
  { path: '/trip/:tid', component: <Trip /> },
];
export { userRoutes };
