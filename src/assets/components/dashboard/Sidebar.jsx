import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPlaneAlt , BiBarChart ,BiCalendar, BiSignal5 } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { FaCampground } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import {PiAirplaneTiltBold} from 'react-icons/pi'
import { MdExpandMore,MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineLogout ,AiOutlineUserAdd} from "react-icons/ai";
import {ImUsers} from "react-icons/im";
import hero from '../../images/hero-imag.jpg'
import './Sidebar.css'
import { Link } from "react-router-dom";
import Camps from "./Camps";
import User from "./User";
import Places from "./Places";
function Sidebar() {
  return (
    <div className="dashhold">
      <div className="dushboard_header1">
        <div className="image_sidebar">
          <div className="image_sidebar">
            <img src={hero} className="photodash" />
          </div>
          <div className="nameelisa">
            <b>Vincent </b>
            <p>Traveller</p>
          </div>
        </div>
        <div className="sidebar_subholder">
          
            <li className="list_dash">
              <BiSignal5 />
              < Link to='c' className="list_dash">
                Dashboard
              </Link>
            </li>
            <li>
              <AiOutlineUserAdd /> <Link to="place" className="list_dash">Users</Link>
            </li>
            <li>
              <MdOutlineLocationOn/> <Link to="/dashboard/users" className="list_dash">Place </Link>
            </li>
            <li>
              <PiAirplaneTiltBold /> <Link to="toure" className="list_dash">Tour</Link>
            </li>
            <li>
              <CiCalendarDate /> <a href="/" className="list_dash">Upcoming</a>
            </li>
            <li>
              <FaCampground />
              <a href="c" className="list_dash">Camps</a>
            </li>
            <li>
              <BiCalendar />
              <a href="/" className="list_dash">Calender</a>
            </li>
            <li>
              <BiBarChart /> <a href="/" className="list_dash">Chart</a>
            </li>

            <li className="logout">
              <AiOutlineLogout /> <a href="/" className="list_dash">Logout</a>
            </li>
          
        </div>
      </div>
    </div>
  );
}
export default Sidebar;