// import React from "react";
// import "./Sidebar.css";
// import { Avatar } from "@material-ui/core";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";

// function Sidebar() {
//   const user = useSelector(selectUser);
//   console.log(user);

//   const recentItem = (topic) => (
//     <div className="sidebar-recentItem">
//       <span className="sidebar-hash">#</span>
//       <p>{topic}</p>
//     </div>
//   );

//   return (
//     <div className="sidebar">
//       <div className="sidebar-top">
//         <img
//           src="https://plus.unsplash.com/premium_photo-1668708034787-185b44cae751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
//           alt=""
//         />
//         <Avatar src={user.photoUrl} className="sidebar-avatar">
//           {user?.displayName[0].toUpperCase()}
//         </Avatar>
//         <h2>{user.displayName}</h2>
//         <h4>{user.email}</h4>
//       </div>

//       <div className="sidebar-stats">
//         <div className="sidebar-stat">
//           <p>Who viewed you</p>
//           <p className="sidebar-statNumber">2,300</p>
//         </div>
//         <div className="sidebar-stat">
//           <p>Views on post</p>
//           <p className="sidebar-statNumber">2,570</p>
//         </div>
//       </div>

//       <div className="sidebar-bottom">
//         <p>Recent</p>
//         {recentItem("NBA Teams")}
//         {recentItem("FIBA teams")}
//         {recentItem("NIL Jersey")}
//         {recentItem("NBA campion")}
//         {recentItem("Baskitball")}
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  console.log(user);

  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const recentTopics = ["FootballFever", "TheBeautifulGame","ForTheLoveOfFootball","SoccerPassion","GameDayGlory"];
  
  const shuffledTopics = shuffleArray(recentTopics);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://plus.unsplash.com/premium_photo-1668708034787-185b44cae751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar-avatar">
          {user?.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2,300</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">2,570</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {shuffledTopics.slice(0, 4).map((topic) => recentItem(topic))}
      </div>
    </div>
  );
}

export default Sidebar;

