import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Sidebar from "../Components/sidebar";
import Footer from "../Components/footer/Footer";
import routes from "../routes";
import Navbar from "../Components/Navbar1";

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
    
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
     
      
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
     
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
   
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        console.log(prop.path)
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      {/* <Sidebar open={open} onClose={() => setOpen(false)} /> */}
      {/* Navbar & Main Content */}

     

      
       <div className="h-full w-full ">
      
        <main
          className={` h-full flex-none transition-all`}
        >

          <div className="h-full relative ">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Analah Insurance "}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
              open={open} onOpen={() => setOpen(true)}
            />
            {/* add  bg_kyc pb-[130px]*/}
            <div className="mx-auto mb-auto h-full min-h-[84vh] bg_kyc pb-[195px]  pt-[71px]  ">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/training" replace />}
                />
              </Routes>
            </div>
            {/* <div className="p-3">
              <Footer />
            </div> */}
          </div>
        </main>
      </div> 
    </div>
  );
}