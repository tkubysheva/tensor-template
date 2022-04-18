import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

<html lang="ru">
  <head>
    <link rel="stylesheet" href="index.css" type="text/css" />
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css"/>
    <title>Spotify App</title>
  </head>
  <body className="main">
    <div className="topbar">
      <a className = "topbar_profile_all">
        <img src="images/photo-profile.png" width="38" height="32" />
        <a className="topbar_profile">ПРОФИЛЬ</a>
      </a>
    </div>
    <aside>
    <nav className="navigationSideBar">  
      <div className="navigationSideBar_Logo">
        <a href="/">
         <img src="images/spotify-full-logo.png" width="170" height="50"/>
        </a>
      </div>
      <ul className="navigationSideBar_Body">
        <li><i className="fa fa-home fa-fw" aria-hidden="true"></i><a>ГЛАВНАЯ</a></li>
        <li><i className="fa fa-search fa-fw" aria-hidden="true"></i><a>ПОИСК</a></li>
        <li><i className="fa fa-music fa-fw" aria-hidden="true"></i><a>МОЯ МУЗЫКА</a></li>
      </ul>
    </nav>
    </aside>
      
    <div className="mainbar">
      <div className="mainbarRecomendation">
        <div className="textRecomendation">
          <p>Рекомендации для вас</p>
        </div>
        <div className="contextRecomendation">
          <div className="recomendationPlaylist">
            <img src="images/cover-first.jpg" width="120" height="120"/>
            <div className="coverName">
              <a>Для влюбленных</a>
            </div>
          </div>
          <div className="recomendationPlaylist">
            <img src="images/cover-second.jpg" width="120" height="120"/>
            <div className="coverName">
              <a>Для вечеров</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mainbarCharts">
        <div className="textCharts">
          <p>Топ чарт</p>
        </div>
        <div className="contextCharts">
          <div className="song">
            <img src="images/song-borntodie-lanadelrey.jpg" width="30" height="30"/>
            <a>Born to die - Lana Del Rey</a>
          </div>
          <div className="song">
            <img src="images/song-young-beautiful-lanadelrey.webp" width="30" height="30"/>
            <a>YoungBeautiful - Lana Del Rey</a>
          </div>
          <div className="song">
            <img src="images/song-ImagineDragons-Believer.jpeg" width="30" height="30"/>
            <a>Believer - Imagine Dragons</a>
          </div>
        </div>
      </div>
    </div>
    <div className="musicbar">
      <a className="player"><img src="images/play.png" width="42" height="42"/></a>
      <a className="currentSong">Играет сейчас</a>
      <div className="sliderLine">
        <div className="slider"></div>
        <div className="line"></div>
        <a className="time"> 0:00</a>
     </div>
    </div>
  </body>
</html>
