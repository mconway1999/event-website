import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import EventList from "./components/EventList";
import SignedUpList from './components/SignedUpList';
import SignUpForm from "./components/SignUpForm";
import SavedEventList from "./components/SavedEventList";
import About from "./components/About";
import EventDetails from "./components/EventDetails";
import App from "./components/App";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <EventList/>
            },
            {
                path: "/signedup",
                element: <SignedUpList/>
            },
            {
                path: "/signup/:id",
                element: <SignUpForm/>
            },
            {
                path: "/savedevents",
                element: <SavedEventList/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/eventdetails/:id",
                element: <EventDetails/>
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

