import App from 'components/App';
import HomePage from 'components/HomePage';
import GameboardPage from 'components/GameboardPage';
import ResultPage from 'components/ResultPage';
import NotfoundPage from 'components/NotfoundPage';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage
      },
      {
        path: '/gameboard',
        component: GameboardPage
      },
      {
        path: '/result',
        component: ResultPage
      },
      {
        path: '/*',
        component: NotfoundPage
      }
    ]
  }
]

export default routes
