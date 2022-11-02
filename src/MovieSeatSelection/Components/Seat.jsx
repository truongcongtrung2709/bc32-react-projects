import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTickets } from '../../actions/ticketActions';
// import { updateSeats } from '../../actions/ticketActions';


const Seat = () => {
    const dispatch = useDispatch();
    const {cinema} = useSelector((state) => state.cinema);
    const bookTickets = useSelector((state) => state.bookTickets);

    const [count, setCount] = useState(1)
    const [clickDisabled, setClickDisabled] = useState(false);


const handleChooseSeats = (seat) => { 
    const name = bookTickets[0].name;
    const numSeats = parseInt(bookTickets[0].numSeats,10)
    const bookedSeats = bookTickets[0].bookedSeats
    setCount(count+1);
    bookedSeats.push(seat);
    console.log(seat);
    console.log(bookedSeats);
    if(numSeats === count || numSeats < count)
    {   
        setClickDisabled(!clickDisabled)
    }
}

   
  return (
    <>
        {cinema.map((row, rowIndex) => (
          <div key={row.hang} className={`row text-center ${rowIndex === 5 ? "mb-5" : ""}`}>
            <div className="rowNumber">{row.hang}</div>
            {row.danhSachGhe.map((seat, seatIndex) => {
              if (rowIndex === 0) {
                return (
                  <div key={seat.soGhe}  className={`rowNumber ${seatIndex === 4 ? "mr-5" : ""}`}>
                    {seat.soGhe}
                  </div>
                );
              }
              return (
                <div key={seat.soGhe}
                  className={`ghe ${seatIndex === 4 ? "mr-5" : ""}`}
                  onClick={clickDisabled ? () =>{} : () => handleChooseSeats(seat)}
                ></div>
              );
            })}
          </div>
        ))}
    </>
  )
}

export default Seat