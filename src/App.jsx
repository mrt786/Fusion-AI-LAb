import { useState } from 'react'
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer.jsx';
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import './App.css'
import Home from './Components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import ContactUs from './Components/ContactUs.jsx';

function App() {
  const Layout = ({ children }) => (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );  
  const router  = createBrowserRouter([{
          path:'/',
          element: 
            <Layout>
            <Home/>
            </Layout>,
      },
      {
        path:'/about',
        element: 
          <Layout>
          <About/>
          </Layout>,
      },
      {
        path:'/services',
        element: 
          <Layout>
          <Services/>
          </Layout>,
      },
      {
        path:'/contact',
        element: 
          <Layout>
          <ContactUs/>
          </Layout>,
      },
    ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Router>
//         <Home />
//     </Router>
//   )
// }
}
export default App
