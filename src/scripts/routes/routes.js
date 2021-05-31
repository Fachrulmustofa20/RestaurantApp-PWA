import RestoList from '../views/page/resto-list';
import Detail from '../views/page/detail';
import Favorite from '../views/page/favorite';

const routes = {
  '/': RestoList,
  '/favorite': Favorite,
  'detail/:id': Detail,
};

export default routes;
