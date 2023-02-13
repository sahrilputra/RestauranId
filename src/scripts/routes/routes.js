import Home from '../views/pages/home';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/resto/:id': Detail,
};

export default routes;
