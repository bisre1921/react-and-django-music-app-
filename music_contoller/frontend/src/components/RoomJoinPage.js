import React, { useState } from 'react'
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import {Link, useNavigate} from "react-router-dom"

const RoomJoinPage = () => {
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleTextFieldChange = (e) => {
    setCode(e.target.value)
  }

  const handleJoinRoomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        code: code
      })
    }
    fetch("/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate(`/room/${code}`)
        } else {
          setError("Room not found.")
        }
      })
      .catch((error) => {
        console.log(error)
      })
      
  }


  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          error={error}
          label="Code"
          placeholder="Enter a Room Code"
          value={code}
          helperText={error}
          variant="outlined"
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" onClick={handleJoinRoomButtonPressed}>
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  )
}

export default RoomJoinPage