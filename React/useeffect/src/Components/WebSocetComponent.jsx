import react, { useEffect } from 'react';

export const WebSocketComponent = () => {
    useEffect(() => {
        const socket = new WebSocket("wss://example.com/soxket");

        socket.onmessage = (event) => {
            console.log("Melding Motattt:", event.data);
        };

        // Rydd opp ved demontering
        return () => {
            socket.close();
            console.log("Socket Lukket");
        };
    }, []); // Kjør èn gang.

    return <div>WebSocket er tilkoblet!</div>;
};