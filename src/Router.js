
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chatbox  from "./Chatbox";
import FriendList from "./FriendList";
import Menu from "./Menu";
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
import Sticker2001 from "./Details-Stickers/Sticker2001";
import Sticker3001 from "./Details-Stickers/Sticker3001";
import Sticker4001 from "./Details-Stickers/Sticker4001";
import Sticker5001 from "./Details-Stickers/Sticker5001";
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

            <Route path="/Sticker2001">
              <Sticker2001 />
            </Route>

            <Route path="/Sticker3001">
              <Sticker3001 />
            </Route>

            <Route path="/Sticker4001">
              <Sticker4001 />
            </Route>

            <Route path="/Sticker5001">
              <Sticker5001 />
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

