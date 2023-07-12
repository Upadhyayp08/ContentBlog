// import React, { useEffect, useState } from "react";
// import SidebarMenu from "./Sidebar";
// import bgimage from "../Wallpapers/SideImg.png";
// import LatestBlog from "./LatestBlog";
// // import { useSelector, useDispatch } from "redux";
// function Home() {
//   useEffect(() => {}, []);

//   return (
//     <>
//       <SidebarMenu />
//       <div className="row backgroundpic">
//         <div
//           className="col-md-6"
//           style={{
//             backgroundImage: `url(${bgimage})`,
//             paddingBottom: "765px",
//             // backgroundSize: "cover",
//             backgroundSize: "cover",
//           }}
//         ></div>
//         <div className="col-md-6">
//           <div className="container text-center" style={{ marginTop: "290px" }}>
//             <div>
//               <h1 style={{ fontFamily: "sans-serif", color: "#52b788" }}>
//                 {" "}
//                 Animal Planet
//               </h1>
//             </div>
//             <div>
//               <h5
//                 style={{
//                   fontFamily: "sans-serif",
//                   color: "#52b788",
//                 }}
//               >
//                 Discovering Animals
//               </h5>
//             </div>
//             <div className="row">
//               <div className="col-md-5"></div>
//               <div
//                 className="col-md-2"
//                 style={{ borderBottom: "1px solid black" }}
//               ></div>
//               <div className="col-md-5"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <LatestBlog />
//     </>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import SidebarMenu from "./Sidebar";
import bgimage from "../Wallpapers/SideImg.png";
import LatestBlog from "./LatestBlog";
// import { useSelector, useDispatch } from "redux";
function Home() {
  useEffect(() => {}, []);

  return (
    <>
      <SidebarMenu />
      <div className="row backgroundpic">
        <div
          className="col-md-6"
          style={{
            backgroundImage: `url(${bgimage})`,
            paddingBottom: "60%",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="container text-center">
            <div>
              <h1
                style={{
                  fontFamily: "sans-serif",
                  color: "#52b788",
                  marginTop: "1rem",
                }}
              >
                Animal Planet
              </h1>
            </div>
            <div>
              <h5
                style={{
                  fontFamily: "sans-serif",
                  color: "#52b788",
                }}
              >
                Discovering Animals
              </h5>
            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div
                className="col-md-2"
                style={{ borderBottom: "1px solid black" }}
              ></div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>
      </div>
      <LatestBlog />
    </>
  );
}

export default Home;
