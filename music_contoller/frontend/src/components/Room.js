import React, {use, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const Room = () => {
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [isHost, setIsHost] = useState(false);

    const navigate = useNavigate();
    const params = useParams();
    const roomCode = params.roomCode;

    useEffect(() => {
        getRoomDetails();
    }, []);


    const getRoomDetails = () => {
        fetch("/api/get-room" + "?code=" + roomCode)
            .then((response) => {
                if (!response.ok) {
                    // props.leaveRoomCallback();
                    navigate("/");
                }
                return response.json();
            })
            .then((data) => {
                setGuestCanPause(data.guest_can_pause);
                setVotesToSkip(data.votes_to_skip);
                setIsHost(data.is_host);
            });
    }

    return (
        <div>
            <h3>{guestCanPause ? "Guest Can Pause" : "Guest Can't Pause"}</h3>
            <p>Votes to skip: {votesToSkip}</p>
            <p>{isHost ? "Host" : "Guest"}</p>
            <p>Room code: {roomCode}</p>
        </div>
    )
}

export default Room;
