import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <HomePage />,
  //   },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
