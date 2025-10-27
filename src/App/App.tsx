import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import { publicRoutes } from '../configs/routes.config'

const Fallback = () => <div className="p-6">Loading…</div>


function buildRoutes() {
  return [
    {
      element: <RootLayout />,
      children: publicRoutes.map((r) => ({
        path: r.path,
        element: (
          <Suspense fallback={<Fallback />}>
            <r.component />
          </Suspense>
        ),
      })),
    },
    // 404
    {
      path: '*',
      element: <div className="p-6">404 – Page not found</div>,
    },
  ]
}

export default function App() {
  const element = useRoutes(buildRoutes())
  return element
}