import TripGallery from '../pages/TripGallery/TripGallery';
interface RouteProps {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}
const userRoutes: Array<RouteProps> = [
  { path: '/', exact: true, component: <TripGallery /> },
];
export { userRoutes };
