import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'
import Room from './Room'
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import ButtonGroup from "@mui/material/ButtonGroup"

const Home = () => {
  const navigate = useNavigate()
  const [roomCode, setRoomCode] = useState(null)

  useEffect(() => {
    fetch('/api/user-in-room')
      .then((response) => response.json())
      .then((data) => {
        setRoomCode(data.code)
        if(data.code) {
          navigate(`/room/${data.code}`)
        }
      })
  }, [navigate])

  const renderHome = () => {
    return (
      <Grid container={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant='contained' color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Room
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    )
  }
  return (
    <div>
        <Routes>
          <Route path="/" element={renderHome()} />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/room/:roomCode" element={<Room />} />
        </Routes>
    </div>
  )
}

export default Home