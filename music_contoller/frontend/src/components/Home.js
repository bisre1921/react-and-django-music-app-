import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'
import Room from './Room'

const Home = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<p>hello there</p>} />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/room/:roomCode" element={<Room />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Home