import "./Main.css";

import hello from "../../images/5293.jpg";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import BookIcon from '@material-ui/icons/Book';
const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">

          <div className="main__greeting">
            <h1>Welcome Back Anjali!</h1>
            <p>You can check your today's task in the task</p>
            <div>
                
            </div>
          </div>
          <img id ="mainImage"src={hello} alt="hello" />
          <div >
              <div className ="todo-main">
                  <label>Today's Task<span style ={{color: "red",marginRight: "70px"}}>(2)</span> </label><MoreHorizIcon />
                  <ul className="startlist">
                      <li><RadioButtonUncheckedIcon className = "i_con" />
                          Share Quiz
                      </li>
                      <li class="lined"><CheckCircleOutlineIcon style={{color:"red"}} className = "i_con"/>
                          Class at 9:30 AM
                      </li>
                      <li class="lined"><CheckCircleOutlineIcon  style={{color:"red"}} className = "i_con"/>
                        Class at 9:30 AM
                      </li>
                      <li ><RadioButtonUncheckedIcon className = "i_con" />
                      Class at 9:30 AM
                      </li>
                      <li ><RadioButtonUncheckedIcon className = "i_con" />
                          Share Quiz
                      </li>
                      <li><RadioButtonUncheckedIcon className = "i_con" />
                          Share Quiz
                      </li>
                      <li ><RadioButtonUncheckedIcon className = "i_con" />
                          Share Quiz
                      </li>
                      
                  </ul>
                
              </div>
          </div>
          
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div style={{backgroundColor:"#dddddd"}} className="card">
            <BookIcon style={{color:"#23049d"}}/>
            <div className="card_inner">
              <p  style={{color:"#23049d"}} className="text-primary-p">Total Classes</p>
              <span style={{color:"red"}} className="font-bold text-title">10</span>
            </div>
          </div>
          <div style={{backgroundColor:"#dddddd"}} className="card">
          <PeopleAltIcon style={{color:"#23049d"}}/>

            <div className="card_inner">
              <p style={{color:"#23049d"}} className="text-primary-p">Total Students</p>
              <span style={{color:"red"}}className="font-bold text-title"> 10</span>
            </div>
          </div>

          <div style={{backgroundColor:"#dddddd"}} className="card">
          <LiveHelpIcon style={{color:"#23049d"}} />
            
            <div className="card_inner">
              <p style={{color:"#23049d"}} className="text-primary-p">Total Teachers</p>
              <span style={{color:"red"}} className="font-bold text-title">10</span>
            </div>
          </div>

          <div style={{backgroundColor:"#dddddd"}} className="card">
          <LiveHelpIcon style={{color:"#23049d"}} />
            
            <div className="card_inner">
              <p style={{color:"#23049d"}} className="text-primary-p">Total Exams</p>
              <span style={{color:"red"}} className="font-bold text-title">10</span>
            </div>
          </div>
        </div>
        
      </div>
      <div>
      <nav>
          
      </nav>
      <h1>
          table can be inserted here similarly
      </h1>


     
      </div>
    </main>
  );
};

export default Main;
