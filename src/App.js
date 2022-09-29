import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import MenuPage from "./pages/menuPage/menupage";
import Homepage from "./pages/homepage.js/homepage";
import Developer from './pages/developer/developer';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import ErrorPage from './pages/errorPage/errorPage';
import OpeningPage from "./pages/openingPage/openingpage";
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';



function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 7000)
  }, [])

  const router = createBrowserRouter([
    {
      path:"/",
      element:loading ? <OpeningPage /> : <MenuPage />
    },
    {
      path:"/homepage",
      element:loading ? <OpeningPage /> : <Homepage />
    },
    {
      path:"/developer",
      element:loading ? <OpeningPage /> : <Developer />
    },
    {
      path:"/projects",
      element:loading ? <OpeningPage /> : <Projects />
    },
    {
      path:"/contact",
      element:loading ? <OpeningPage /> : <Contact />
    },
    {
      path:"*",
      element:<ErrorPage />
    }
  ])

  return (
    <div className="App">
      <ParallaxProvider>
      <AnimatePresence>
       <RouterProvider router={router} />
       </AnimatePresence>
       </ParallaxProvider>
    </div>
  );
}

export default App;
