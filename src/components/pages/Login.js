import React, {useState} from "react";
import {Link, NavLink,useHistory} from "react-router-dom"
import "./login.scss";
import tw from "twin.macro";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FooterDiv from "../layouts/MainFooter";
import { NoEncryption } from "@material-ui/icons";
//import ArrowForwardIcon from "@material-ui/icons/ArrowBack";

const Main = tw.div`shadow-2xl`;
function Login() {
  const hist = useHistory();
  const[input, setInput] = useState("");
  const[input1, setInput1] = useState("");
const handleClick =()=>{
  hist.push("/admin/dashboard")
}

  return (
    <>
   
    <div className="baba__yao">
      <Main>
        <div className="back__button">
          <p>&nbsp;&nbsp;&nbsp;<NavLink to="/" style={{listStyle:"none",textDecoration:"none"}}>Go Home</NavLink></p>
        </div>
        <div className="Main__div">
          <div>
            <p>
              <VpnKeyIcon
                style={{
                  color: "green",
                  padding: "5px;",
                  marginRight: "10px;",
                }}
              />
              &nbsp;&nbsp;Sign In
              <NoEncryption/>
            </p>
          </div>

          <div>
            <p>
              Dont have an account?
              <span style={{ color: "green", fontWeight: "bolder" }}>
                &nbsp;&nbsp;<NavLink to="/signup" style={{listStyle:"none",textDecoration:"none",color:"green",fontWeight:"bolder"}}>Sign up</NavLink>
              </span>
            </p>
          </div>
          <div>
            <label>Email</label>
            <input type="text" 
            value={input}
              onChange={(e)=>setInput(e.target.value)}
            placeholder="👤" />
          </div>
          <div>
            <label>Password</label>
            <input type="password"
            value={input1}
              onChange={(e)=>setInput1(e.target.value)}
             placeholder="🗝️" />
          </div>
          <div>
          <label></label>
          <Link  to="/admin/dashboard"><span hidden ={!input|| !input1} >You are almost there ! try it out</span></Link>
            <input disabled={!input.trim()|| !input1.trim()} type="submit" value="Login" onClick={handleClick}/>
           
          </div>
        </div>
      </Main>
      <FooterDiv />
    </div>
    </>
  );
}


export default Login;
