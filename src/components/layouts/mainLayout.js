import React from "react";
//import Particles from 'react-particles-js';
import tw from "twin.macro";
import "./mainLayout.scss";
//import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
//import PhoneNav from "./phoneNav"
import { Container } from "./layoutDiv";
//import image from "../../assets/images/cover.svg"
import logo from "../../assets/images/logo.svg";
import Navbar from "./Nav";
import FooterDiv from "./MainFooter";
import Phoneimage from "../../assets/images/epsa.svg";
import Pmage from "../../assets/images/phone.png";
//import { Block } from "@material-ui/icons";
import "./mainLayout.scss"

const MainBody = tw(Container)` rounded-lg max-w-full   flex flex-col `;
const TwoDivs1 = tw(
  Container
)`w-full   md:w-1/2 lg:w-1/2 relative  justify-center flex  p-12 m-1 md:p-16 lg:p-16 lg:m-4 md:m-4 box-border flex-col border-green-700`;
const TwoDivs2 = tw.div`w-screen  md:w-1/2 lg:w-1/2 justify-center flex  p-8 m-4 md:p-16 lg:p-16 lg:m-4 md:m-4 m-1 box-border flex-col border-green-700`;
const Topic = tw.h1`lg:text-5xl text-black md:text-5xl sm:text-2xl font-hairline tracking-wide p-1`;
const MainP = tw.p`text-black lg:text-xl md:text-xl text-base  font-hairline p-1`;
const Input = tw.input`shadow-lg  border-0 rounded-md focus:shadow-lg focus:bg-gray-400 focus:outline-none `;

const SendButton = tw.button`  border-0   w-24 focus:shadow-lg shadow-lg bg-green-200 focus:bg-gray-400 focus:border-blue-600 text-sm  hover:bg-green-700 hover:shadow-lg hover:text-white focus:outline-none`;
const Image = tw.img` -rotate-90   max-h-full transform skew-x-12 block  lg:ml-12 ml-1 md:ml-12 sm:p-12  box-border lg:p-12 md:p-12`;
const PhoneImage = tw.img`lg:max-h-full md:max-w-full sm:max-w-screen-sm skew-x-12  w-64 lg:mt-4 md:mt-4 mt-12 transform -skew-y-12 lg:ml-12 sm:ml-0 md:ml-12`;
const ContentVid = tw(
  Container
)`flex-col md:flex-col box-border items-center justify-center lg:flex-row `;
export const ButtonClass = tw.button`bg-gray-500   px-12 h-8 text-base flex m-4  items-center focus:bg-green-200 focus:border-white focus:rounded-full justify-center right-0 text-black font-bold  rounded-full `;
export const LoginButton = tw(
  ButtonClass
)`bg-green-400 border-0 text-gray-800 hover:bg-green-700 outline-none hover:text-green-100`;
export const SignupButton = tw(
  ButtonClass
)`bg-blue-400 border-0 hover:bg-blue-900 outline-none hover:text-white`;

const MainLayout = () => {
  const properties = {
    service: "How it works",
    about: "About us",
    plans: "Plans",
  };

  return (
    <div>
      <Navbar
        service={properties.service}
        about={properties.about}
        plans={properties.plans}
        logo={logo}
      />
      <MainBody className="Main__contaner">
        <ContentVid>
          <TwoDivs1 className="Two___dis1">
            <Topic>Payments at home </Topic>
            <MainP className="Main__p">
              Share your link to time options or get updates from us
            </MainP>
            <div className="main__contaner-buttons">
              <Input type="text" className="Input__place" />
              <SendButton className="Sendbutton__placeholder">
                <ArrowForwardIcon />
              </SendButton>
            </div>
            <span>&#8213; Share to recieve updates forever</span>
          </TwoDivs1>
          <TwoDivs2>
            <Image src={Phoneimage} alt="image" />
          </TwoDivs2>
        </ContentVid>
        <ContentVid>
          <TwoDivs1>
            <PhoneImage
              src={Pmage}
              alt="image"
              style={{ marginRight: "20px" }}
            />
          </TwoDivs1>
          <TwoDivs2>
            <Topic>Manage your money </Topic>
            <MainP className="Main__p">
              Manage your money through our online connected wallet. Withdraw
              ,Deposit, Share , Pay
            </MainP>
          </TwoDivs2>
        </ContentVid>
      </MainBody>
      <ContentVid>
        <FooterDiv />
      </ContentVid>
    </div>
  );
};

// const ButtonClass = tw.button`bg-gray-500   px-16 h-8 text-base flex m-4  items-center focus:bg-green-200 focus:border-white focus:rounded-full justify-center right-0 text-black font-bold  rounded-full`;
// const LoginButton = tw(
//   ButtonClass
//  )`bg-green-400 border-0 hover:bg-green-700 outline-none hover:text-green-100`;
//   const SignupButton = tw(
//   ButtonClass
//  )`bg-blue-400 border-0 hover:bg-blue-900 outline-none hover:text-white`;

export default MainLayout;
