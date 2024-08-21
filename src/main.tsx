import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'draft-js/dist/Draft.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.tsx';
import Course from './routes/Course.tsx';
import Home from './routes/Home.tsx';
import CreateLesson from './components/CreateLesson.tsx';
import LessonContent from './routes/LessonContent.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "course/:id",
        element: <Course />,
        errorElement: <ErrorPage />,
      },
      {
        path: "course/lesson/new",
        element: <CreateLesson />,
        errorElement: <ErrorPage />,
      },
      {
        path: "course/lesson/:id",
        element: <LessonContent />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
