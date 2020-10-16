import React, { useState } from "react";
import {NavLink} from "react-router-dom"
import "./Signup.scss";
import tw from "twin.macro";
//import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FooterDiv from "../layouts/MainFooter";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const Main = tw.div`shadow-2xl`;

function Signup() {
  const[input, setInput] = useState("");
const[input1, setInput1] = useState("");

const[input2, setInput2] = useState("");

const[input3, setInput3] = useState("");

const[input4, setInput4] = useState("");


  return (
    <div className="baba__yao">
      <Main>
        <div className="back__button">
          <p>&nbsp;&nbsp;&nbsp;<NavLink to="/" style={{listStyle:"none",textDecoration:"none"}}>Go Home</NavLink></p>
        </div>
        <div className="Main__div">
          <div>
            <p>
              <PersonAddIcon
                style={{
                  color: "green",
                  padding: "5px;",
                  marginRight: "10px;",
                }}
              />
              &nbsp;&nbsp;Create account
            </p>
          </div>

          <div>
            <p>
              Have an account?
              <span style={{ color: "green", fontWeight: "bolder" }}>
                &nbsp;&nbsp;<NavLink to="/login" style={{listStyle:"none",textDecoration:"none",color:"green",fontWeight:"bolder"}}>Login</NavLink>
              </span>
            </p>
          </div>
          <div>
            <label>Name</label>
            <input type="text"
            value={input}
              onChange={(e)=>setInput(e.target.value)}
             placeholder="👤" />
          </div>
          <div>
            <label>Email</label>
            <input type="text"
            value={input1} 
            onChange={(e)=>setInput1(e.target.value)}
            placeholder="📨" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text"
            value={input2}
            onChange={(e)=>setInput2(e.target.value)} 
            placeholder="📱" />
          </div>
          <div>
            <label>password</label>
            <input type="password"
            value={input3}
            onChange={(e)=>setInput3(e.target.value)}
             placeholder="🗝️" />
          </div>
          <div>
            <label>Confirm password</label>
            <input type="password"
            value={input4} 
            onChange={(e)=>setInput4(e.target.value)}
            placeholder="🗝️" />
          </div>
          <div>
         
          <label ><span hidden ={!input.trim()|| !input.trim()||!input1.trim()||!input2.trim()||!input3.trim()||!input4.trim()}  >Complete the process</span></label>
            <input disabled={!input.trim()|| !input.trim()||!input1.trim()||!input2.trim()||!input3.trim()||!input4.trim()} type="submit"  value="Create Account"/>
          </div>
        </div>
      </Main>
      <FooterDiv />
    </div>
  );
}

export default Signup;
