import App from 'components/App'
import HomePage from 'components/HomePage'
import GameboardPage from 'components/GameboardPage'
import ResultPage from 'components/ResultPage'
import NotFoundPage from 'components/NotFoundPage'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
      {
        path: '/gameboard',
        component: GameboardPage,
      },
      {
        path: '/result',
        component: ResultPage,
      },
      {
        path: '/*',
        component: NotFoundPage,
      },
    ],
  },
]

export default routes
