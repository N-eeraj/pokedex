import { createBrowserRouter } from 'react-router-dom'

const basename = import.meta.env.BASE_URL

import routes from '@/router/routes'

const router = createBrowserRouter(routes, {basename})

export default router