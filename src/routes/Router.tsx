import { Route, Routes } from 'react-router';
import { userRoutes, authRoutes } from './allRoutes';
import Authmiddleware from './middleware/Authmiddleware';
import Layout from '../components/layout/Layout';
import NonLayout from '@components/layout/NonLayout/NonLayout';
interface RouteType {
  path: string;
  component: React.ReactNode;
}

function Router() {
  return (
    <Routes>
      {authRoutes.map((route: RouteType, idx: number) => (
        <Route
          path={route.path}
          element={<NonLayout>{route.component}</NonLayout>}
          key={idx}
        />
      ))}
      {userRoutes.map((route: RouteType, idx: number) => (
        <Route
          path={route.path}
          element={
            <Authmiddleware>
              <Layout>{route.component}</Layout>
            </Authmiddleware>
          }
          key={idx}
        />
      ))}
    </Routes>
  );
}

export default Router;
