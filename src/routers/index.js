import React from 'react'
import { Redirect } from 'react-router-dom'

const Discover = React.lazy(_ => import("../pages/discover"))
const Friend = React.lazy(_ => import("../pages/friend"))
const Mine = React.lazy(_ => import("../pages/mine"))
const Album = React.lazy(_ => import("../pages/discover/c-pages/album"))
const Artist = React.lazy(_ => import("../pages/discover/c-pages/artist"))
const Djradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"))
const Ranking = React.lazy(_ => import("../pages/discover/c-pages/ranking"))
const Recommend = React.lazy(_ => import("../pages/discover/c-pages/recommend/"))
const Song = React.lazy(_ => import("../pages/discover/c-pages/songs"))


const route = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component:Discover,
    routes:[
      {
        path:'/discover',
        exact:true,
        render:() => <Redirect to="/discover/recommend" />,
      },
      {
        path:'/discover/recommend',
        component:Recommend
      },
      {
        path:'/discover/album',
        component:Album
      },
      {
        path:'/discover/artist',
        component:Artist
      },
      {
        path:'/discover/djradio',
        component:Djradio
      },
      {
        path:'/discover/ranking',
        component:Ranking
      },
      {
        path:'/discover/songs',
        component:Song
      },
    ]
  },
  {
    path: '/Friend',
    component: Friend,
  },
  {
    path: '/mine',
    component: Mine,
  },
]

export default route
