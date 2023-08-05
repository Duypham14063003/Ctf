import { LayoutProps } from 'antd';
import { Navigate, RouteObject } from 'react-router';
import { AppRoutes } from './AppRoutes';
// import Homepage from "../pages/home/homePage";
import Login from '../pages/login/login';
import Management from '../pages/admin/managementContest/manager/management';
import MainLayout from '../layouts/mainLayout/MainLayout';
import CreateContest from '../pages/admin/managementContest/create/create';
import Ranking from '../pages/ranking/Ranking';
import Home from '../pages/user/Home/Home';
import Check from '../pages/check/Check';
type RouteProperties = {
  layout?: React.FC<LayoutProps>;
};

type ConfigRoute = RouteObject & RouteProperties;

export const ConfigRoutes: ConfigRoute[] = [
  //   {
  //     element: <Homepage />,
  //     path: AppRoutes.URL,
  //     index: true,
  //   },
  {
    element: <Login />,
    path: AppRoutes.LOG_IN,
    // layout: MainLayout,
  },
  {
    element: <Management />,
    path: AppRoutes.ADMIN + AppRoutes.MANAGEMENT,
    layout: MainLayout,
  },
  {
    element: <CreateContest />,
    path: AppRoutes.ADMIN + AppRoutes.NEW + AppRoutes.CONTEST,
    layout: MainLayout,
  },
  {
    element: <Ranking />,
    path: AppRoutes.RANKING,
    layout: MainLayout,
  },
  {
    path: '*',
    element: <Navigate to={AppRoutes.NOT_FOUND} />,
  },

  {
    element: <Check/>,
    path: AppRoutes.CHECK,
    
  },
  {
    element: <Home></Home>,
    path: AppRoutes.HOME,
  },
];
