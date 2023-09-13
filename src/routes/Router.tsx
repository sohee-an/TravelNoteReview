import { Route, Routes } from 'react-router';
import { userRoutes } from './allRoutes';
import Authmiddleware from './middleware/Authmiddleware';
import Layout from '../components/layout/Layout';

interface RouteType {
  path: string;
  component: React.ReactNode;
}

function Router() {
  return (
    <Routes>
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
