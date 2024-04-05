import { useState } from "react";
import {genTicket, sum} from "./Helper.js";
import Ticket from "./Ticket";

export default function Lottery({n=3, winningSum=15}) {
    const [ticket, setTicket] = useState(genTicket(n));
    let isWin = sum(ticket) === winningSum;

    function getNewTicket() {
        setTicket(genTicket(n));
        console.log(ticket);
    }

    return (
        <>
           <Ticket ticket={ticket} />
           <button onClick={getNewTicket}>Get new ticket</button>
           <br /><br />
           {isWin && "Congratulations! You won."}
        </>
    );
}