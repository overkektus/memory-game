import App from 'src/components/App'
import HomePage from 'src/components/HomePage'
import GameboardPage from 'src/components/GameboardPage'
import ResultPage from 'src/components/ResultPage'
import NotFoundPage from 'src/components/NotFoundPage'

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
