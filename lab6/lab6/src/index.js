import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './routes/Header';
import Categories from './routes/Categories';
import Products from './routes/Products'
import Product from './routes/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/categories",
        element: <Categories />,
        loader: async ({ request }) => {
          return fetch('https://dummyjson.com/products/categories', { 
            signal: request.signal 
          })
        }
      },
      {
        path: "/categories/:category/products",
        element: <Products />,
        loader: async ({ request, params }) => {
          return fetch(`https://dummyjson.com/products/category/${params.category}`, {
            signal: request.signal
          })
        }
      },
      {
        path: "/categories/:category/products/:id",
        element: <Product />,
        loader: async ({ request, params }) => {
          return fetch(`https://dummyjson.com/products/${params.id}`, {
            signal: request.signal
          })
        }
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
