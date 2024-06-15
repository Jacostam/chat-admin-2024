import { useEffect, useState } from 'react';
import io from "socket.io-client";

const useSocket = (
    unicId, 
    onNewChannel = () => {}, 
    onNewMessage = () => {}
) => {

    let socket = null;
    let interval = null;

    const [connected, setConnected] = useState(false);
    const [currentCount, setCurrentCount] = useState(0);


    useEffect(() => {
        if (!connected) {
            setConnected(true);
            socket = io.connect(process.env.NEXT_PUBLIC_API_ADMIN_CHAT);
            socket.connect();

            socket.emit('join', unicId);

            //listen new channels
            socket.on('channel_by_colaborator', (data) => {
                onNewChannel(data)
            })
            
            //listen new messages
            socket.on('message_channel_by_colaborator', (data) => {
                onNewMessage(data)
            })

            socket.on("pong", () => {
                setCurrentCount(0);
            });

            interval = initInterval();
        }

        return () => {
            socket?.disconnect();
            if (interval) clearInterval(interval)
        };
    }, [])

    const initInterval = () => {
        return setInterval(() => {
            socket?.emit("pingpong", unicId);
            setCurrentCount((current) => current + 1);
        }, 2000);
    }

    useEffect(() => {
        if (currentCount === 10) {
            setCurrentCount(0);
            socket?.disconnect();
            socket?.connect();
        }
    }, [currentCount]);

    return {
        socket
    }
}

export default useSocket