import BookingPage from "../pages/bookings";
import HomePage from "../pages/home";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default Main;
