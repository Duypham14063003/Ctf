import { useRoutes } from 'react-router';
import { ConfigRoutes } from '../routes/ConfigRoutes';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import 'antd/dist/reset.css';
function App() {
  const convertRoutes = ConfigRoutes.map((route) => {
    const { layout, element: elementRoute } = route;

    let element = elementRoute;
    if (layout) {
      const Layout = layout;
      element = <Layout>{element}</Layout>;
    }

    return {
      ...route,
      element,
    };
  });

  const elements = useRoutes(convertRoutes);
  return <div className="app">{elements}</div>;
}

export default App;
