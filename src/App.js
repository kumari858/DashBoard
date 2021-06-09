import {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/main/Main';
const App = () => {
   const [sidebarOpen, setSidebar] = useState(false);
   const openSidebar = () =>{
     setSidebar(true);
   };
   const closeSidebar = () => {
     setSidebar(false);
   };

  return (
    <div className="container">
        <Navbar sidebarOen = {sidebarOpen} openSidebar ={openSidebar}/ >
         <Main />
         <Sidebar sidebarOpen = {sidebarOpen} closeSidebar ={closeSidebar}/ >
   </div>
  );
}

export default App;
