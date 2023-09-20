import UserGallery from '@/pages/UserGallery/UserGallery';
interface RouteProps {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}
const userRoutes: Array<RouteProps> = [
  { path: '/', component: <UserGallery /> },
  { path: '/user/:uid', component: <UserGallery /> },
];
export { userRoutes };
