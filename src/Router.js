
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chatbox  from "./Chatbox";
import FriendList from "./FriendList";
import Menu from "./MenuPage/Menu";
import MangoSetting from "./MenuPage/MangoSetting";
import Profile from "./ProfilePage/Profile";
import Post from "./ProfilePage/Post";
import Friend from "./ProfilePage/Friend";
import Image from "./ProfilePage/Image";
import Video from "./ProfilePage/Video";
import GamePage from "./GamePage";
import HotStickersList from "./Sticker-Category/HotStickersList";
import Sticker0001 from "./Details-Stickers/Sticker0001";
import Sticker0002 from "./Details-Stickers/Sticker0002";
import Sticker0003 from "./Details-Stickers/Sticker0003";
import Sticker0004 from "./Details-Stickers/Sticker0004";
import Sticker0005 from "./Details-Stickers/Sticker0005";
import Sticker0006 from "./Details-Stickers/Sticker0006";
import Sticker0007 from "./Details-Stickers/Sticker0007";

import Sticker1001 from "./Details-Stickers/Sticker1001";
import Sticker1002 from "./Details-Stickers/Sticker1002";
import Sticker1003 from "./Details-Stickers/Sticker1003";
import Sticker1004 from "./Details-Stickers/Sticker1004";
import Sticker1005 from "./Details-Stickers/Sticker1005";
import Sticker1006 from "./Details-Stickers/Sticker1006";

import Sticker2001 from "./Details-Stickers/Sticker2001";
import Sticker2002 from "./Details-Stickers/Sticker2002";
import Sticker2003 from "./Details-Stickers/Sticker2003";
import Sticker2004 from "./Details-Stickers/Sticker2004";
import Sticker2005 from "./Details-Stickers/Sticker2005";

import Sticker3001 from "./Details-Stickers/Sticker3001";
import Sticker3002 from "./Details-Stickers/Sticker3002";
import Sticker3003 from "./Details-Stickers/Sticker3003";
import Sticker3004 from "./Details-Stickers/Sticker3004";

import Sticker4001 from "./Details-Stickers/Sticker4001";
import Sticker4002 from "./Details-Stickers/Sticker4002";
import Sticker4003 from "./Details-Stickers/Sticker4003";

import Sticker5001 from "./Details-Stickers/Sticker5001";
import Sticker5002 from "./Details-Stickers/Sticker5002";

import Sticker6001 from "./Details-Stickers/Sticker6001";

import NewStickersList from "./Sticker-Category/NewStickersList";
import EffectStickersList from "./Sticker-Category/EffectStickersList";
import AnimatedStickersList from "./Sticker-Category/AnimatedStickersList";
import CuteStickersList from "./Sticker-Category/CuteStickersList";
import CoolStickersList from "./Sticker-Category/CoolStickersList";
import WarnAndFuzzyStickerList from "./Sticker-Category/WarnAndFuzzyStickerList";


// Create Component
function Router()  {
    return(
        <BrowserRouter>
        <Switch>

          
            <Route path="/friend-list">
              <FriendList />
            </Route>

            <Route path="/menu">
              <Menu />
            </Route>

            <Route path="/Mangosetting">
              <MangoSetting />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/Post">
              <Post />
            </Route>

            <Route path="/Friend">
              <Friend />
            </Route>

            <Route path="/Image">
              <Image />
            </Route>

            <Route path="/Video">
              <Video />
            </Route>

            <Route path="/game-page">
              <GamePage />
            </Route>

            <Route path="/Chatbox">
              <Chatbox />
            </Route>

            <Route path="/HotStickersList">
              <HotStickersList />
            </Route>

            <Route path="/NewStickersList">
              <NewStickersList />
            </Route>

            <Route path="/EffectStickersList">
              <EffectStickersList />
            </Route>

            <Route path="/AnimatedStickersList">
              <AnimatedStickersList />
            </Route>

            <Route path="/CuteStickersList">
              <CuteStickersList />
            </Route>

            <Route path="/CoolStickersList">
              <CoolStickersList />
            </Route>

            <Route path="/WarnAndFuzzyStickerList">
              <WarnAndFuzzyStickerList />
            </Route>

            <Route path="/Sticker0001">
              <Sticker0001 />
            </Route>

            <Route path="/Sticker0002">
              <Sticker0002 />
            </Route>

            <Route path="/Sticker0003">
              <Sticker0003 />
            </Route>

            <Route path="/Sticker0004">
              <Sticker0004 />
            </Route>

            <Route path="/Sticker0005">
              <Sticker0005 />
            </Route>

            <Route path="/Sticker0006">
              <Sticker0006 />
            </Route>

            <Route path="/Sticker0007">
              <Sticker0007 />
            </Route>

            <Route path="/Sticker1001">
              <Sticker1001 />
            </Route>

            <Route path="/Sticker1002">
              <Sticker1002 />
            </Route>

            <Route path="/Sticker1003">
              <Sticker1003 />
            </Route>

            <Route path="/Sticker1004">
              <Sticker1004 />
            </Route>

            <Route path="/Sticker1005">
              <Sticker1005 />
            </Route>

            <Route path="/Sticker1006">
              <Sticker1006 />
            </Route>

            <Route path="/Sticker2001">
              <Sticker2001 />
            </Route>

            <Route path="/Sticker2002">
              <Sticker2002 />
            </Route>

            <Route path="/Sticker2003">
              <Sticker2003 />
            </Route>

            <Route path="/Sticker2004">
              <Sticker2004 />
            </Route>

            <Route path="/Sticker2005">
              <Sticker2005 />
            </Route>

            <Route path="/Sticker3001">
              <Sticker3001 />
            </Route>

            <Route path="/Sticker3002">
              <Sticker3002 />
            </Route>

            <Route path="/Sticker3003">
              <Sticker3003 />
            </Route>

            <Route path="/Sticker3004">
              <Sticker3004 />
            </Route>

            <Route path="/Sticker4001">
              <Sticker4001 />
            </Route>

            <Route path="/Sticker4002">
              <Sticker4002 />
            </Route>

            <Route path="/Sticker4003">
              <Sticker4003 />
            </Route>

            <Route path="/Sticker5001">
              <Sticker5001 />
            </Route>

            <Route path="/Sticker5002">
              <Sticker5002 />
            </Route>

            <Route path="/Sticker6001">
              <Sticker6001 />
            </Route>

            <Route path="/">
              <Chatbox />
            </Route>

            
        </Switch>
        </BrowserRouter>

    )
};

export default Router; //Run Router

