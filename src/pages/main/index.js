import Footer from '@/components/footer'
import Header from '@/components/header'
import ScrollTop from '@/components/ScrollTop'
import Route from '@/routers'
import store from '@/store'
import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import PlayerBar from '../player/player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ScrollTop>
          <Header />
          <Suspense fallback={<div>loading</div>}>
            {renderRoutes(Route)}
          </Suspense>
          <PlayerBar />
          <Footer />
        </ScrollTop>
      </HashRouter>
    </Provider>
  )
})
