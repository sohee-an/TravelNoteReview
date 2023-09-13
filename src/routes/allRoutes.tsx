import TripGallery from '../pages/TripGallery/TripGallery';
interface RouteProps {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}
const userRoutes: Array<RouteProps> = [
  { path: '/', component: <TripGallery /> },
  { path: '/trip/:uid', component: <TripGallery /> },
];
export { userRoutes };
