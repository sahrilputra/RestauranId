import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import FAVORITE from '../views/pages/like';

const routes = {
  '/': Home,
  '/resto/:id': Detail,
  '/favorite': FAVORITE,
};

export default routes;
