import {  generateInsertion } from "../../Generer/GenererInsertion.js";
import queries from "../../Requêtes/Select/PrendRequetes.js";
import { PromiseInsertion } from "../AccesALaBase.js";

let newRequete;

/*New Role*/
const newRole = (req, res) => {
    const { role_id, role_name } = req.body;
    PromiseInsertion(generateInsertion(queries.roleQ, [role_id, role_name]), res);
}

/*New User*/ 
const newUser = (req, res) => {
    const { user_id, username, password, first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, role_id } = req.body;
    PromiseInsertion(generateInsertion(queries.userQ, [user_id, username, password, first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, role_id]), res);
}


/*New Payement METHOD*/
const newPayement_method = (req, res) => {
    const { payment_method_id, payment_method_name } = req.body;
    PromiseInsertion(generateInsertion(queries.payment_methodQ, [payment_method_id, payment_method_name]), res);
}

/*New city*/ 
const newCity = (req, res) => {
    const { city_id, city_name } = req.body;
    PromiseInsertion(generateInsertion(queries.cityQ, [city_id, city_name]), res);
}

/*New hotel*/ 
const newHotel = (req, res) => {
    const { hotel_id, hotel_name, hotel_address, hotel_is_active, city_id } = req.body;
    PromiseInsertion(generateInsertion(queries.hotelQ, [hotel_id, hotel_name, hotel_address, hotel_is_active, city_id]), res);
}

/*New ROOM TYPE*/
const newRoom_type = (req, res) => {
    const { room_type_id, room_type_name, room_type_base_price } = req.body;
    PromiseInsertion(generateInsertion(queries.room_typeQ, [room_type_id, room_type_name, room_type_base_price]), res);
}

/**ROOM */
const newRoom = (req, res) => {
    const { room_id, hotel_id, room_type_id } = req.body;
    PromiseInsertion(generateInsertion(queries.roomQ, [room_id, hotel_id, room_type_id]), res);
}

/*NEW ROOM OOPTION*/ 
const newRoom_option = (req, res) => {
    const { room_option_id, room_option_name, room_option_description, room_option_price } = req.body;
    PromiseInsertion(generateInsertion(queries.room_optionQ, [room_option_id, room_option_name, room_option_description, room_option_price]), res);
}

/*HAVE ROOM OPTION*/
const newHave_room_option = (req, res) => {
    const { have_room_option_id, room_id, room_option_id } = req.body;
    PromiseInsertion(generateInsertion(queries.have_room_optionQ, [have_room_option_id, room_id, room_option_id]), res);
}

/*conference room*/
const newConference_room = (req, res) => {
    const { conference_room_id, conference_room_capacity, conference_room_price_per_hour, hotel_id } = req.body;
    PromiseInsertion(generateInsertion(queries.conference_roomQ, [conference_room_id, conference_room_capacity, conference_room_price_per_hour, hotel_id]), res);
}

/*Reservation*/ 
const newReservation = (req, res) => {
    const {  reservation_id, creation_timestamp, start_timestamp, end_timestamp, special_requests, is_paid, is_canceled, penalty_rate, room_id, conference_room_id, user_id, payment_method_id } = req.body;
    PromiseInsertion(generateInsertion(queries.reservationQ, [ reservation_id, creation_timestamp, start_timestamp, end_timestamp, special_requests, is_paid, is_canceled, penalty_rate, room_id, conference_room_id, user_id, payment_method_id]), res);
}

/*Rating*/ 
const newRating = (req, res) => {
    const {rating_id, rating_rate, rating_comment, hotel_id, user_id } = req.body;
    PromiseInsertion(generateInsertion(queries.ratingQ, [rating_id, rating_rate, rating_comment, hotel_id, user_id]), res);
}

/*Disoucnt*/ 
const newDiscount = (req, res) => {
    const { iscount_id, discount_name, discount_rate, discount_start, discount_end } = req.body;
    PromiseInsertion(generateInsertion(queries.discountQ, [iscount_id, discount_name, discount_rate, discount_start, discount_end]), res);
}

/*Have reduce price*/ 
const newHave_reduce_price = (req, res) => {
    const { have_reduced_price_id, room_type_id, discount_id } = req.body;
    PromiseInsertion(generateInsertion(queries.have_reduce_priceQ, [have_reduced_price_id, room_type_id, discount_id]), res);
}

/*have reduce price confernce room*/ 
const newHave_reduce_price_conference_room = (req, res) => {
    const {have_reduced_price_conference_room_id, conference_room_id, discount_id } = req.body;
    PromiseInsertion(generateInsertion(queries.have_reduce_price_conference_roomQ, [have_reduced_price_conference_room_id, conference_room_id, discount_id]), res);
}

export default newRequete = {
    newUser,
    newCity,
 newConference_room,
 newDiscount,
 newHave_reduce_price,
 newHave_reduce_price_conference_room,
 newHave_room_option,
 newHotel,
 newPayement_method,
 newRating,
 newReservation,
 newRole,
 newRoom,
 newRoom_option,
 newRoom_type,
}