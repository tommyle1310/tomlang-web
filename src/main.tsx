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
import UpdateLesson from './components/UpdateLesson.tsx';
import LessonContent from './routes/LessonContent.tsx';
import Courses from './routes/Courses.tsx';

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
        path: "course/lesson/update",
        element: <UpdateLesson />,
        errorElement: <ErrorPage />,
      },
      {
        path: "course/lesson/:id",
        element: <LessonContent />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/courses",
        element: <Courses />,
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
