import { Route, Routes } from 'react-router';
import NonLayout from '@components/layout/NonLayout/NonLayout';
import { userRoutes, authRoutes } from './allRoutes';
import Authmiddleware from './middleware/Authmiddleware';
import Layout from '../components/layout/Layout';

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
