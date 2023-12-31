import { Outlet } from "react-router-dom";
import HomeMiddle from "../../HomeComponents/HomeMiddle/HomeMiddle";
import TopFromFilter from "../../HomeComponents/HomeMiddle/HomeMiniParts/TopFromFilter/TopFromFilter";
import HomeSecondCol from "../../HomeComponents/HomeSecondCol/HomeSecondCol";
import Message from "../../HomeComponents/Message/Message";
import SideNav from "../../HomeComponents/SideNav/SideNav";
import Header from "../../Shared/Header/Header";
import MobileMenu from "../../Shared/Header/MobileMenu";
import "./Homelayout.css"
const Homelayouts = () => {
    return (
        <div>
            <Header></Header>
            <div className="bottom-border">

            </div>
            <MobileMenu></MobileMenu>
            <div className="homeLayout">
                <SideNav></SideNav>
                <HomeSecondCol></HomeSecondCol>
                <div className="home-middle-layout">
                    <TopFromFilter></TopFromFilter>
                    <Outlet></Outlet>
                </div>
                {/* <HomeMiddle></HomeMiddle> */}
                <Message></Message>
            </div>
        </div>
    );
};

export default Homelayouts;