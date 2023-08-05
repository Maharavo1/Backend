import { Promise } from "../AccesALaBase.js";
import selects from "../../Requêtes/SelectAll/FirstSelect.js";
import { generateDisplay } from "../../Generer/GenererDisplay.js";

let getAll;

/**Role */
const  getAllRole   = (req, res) => {
    Promise(generateDisplay(selects.getAllRole ), res);
}

/**User */
const getAllUser = (req, res) => {
    Promise(generateDisplay(selects.getAllUser), res);
}

/** PAYEMENT METHOD*/
const getAllPayement_method = (req, res) => {
    Promise(generateDisplay(selects.getAllPayement_method), res);
}

/**city */
const getAllCity = (req, res) => {
    Promise(generateDisplay(selects.getAllCity), res);
}

/**HOTEL */
const getAllHotel = (req, res) => {
    Promise(generateDisplay(selects.getAllHotel), res);
}

/**ROOM TYPE */
const getAllRoom_type = (req, res) => {
    Promise(generateDisplay(selects.getAllRoom_type), res);
}

/**ROOM */
const getAllRoom  = (req, res) => {
    Promise(generateDisplay(selects.getAllRoom), res);
}

/**ROOM OTPION */
const getAllRoom_option = (req, res) => {
    Promise(generateDisplay(selects.getAllRoom_option), res);
}

/**HAVE ROOM OTPION */
const getAllHave_room_option = (req, res) => {
    Promise(generateDisplay(selects.getAllHave_room_option), res);
}


/**CONFERENCE ROOM */
const getAllConference_room = (req, res) => {
    Promise(generateDisplay(selects.getAllConference_room), res);
}

/**RESERVATION */
const getAllReservation  = (req, res) => {
    Promise(generateDisplay(selects.getAllReservation ), res);
}

/**RATING */
const getAllRating  = (req, res) => {
    Promise(generateDisplay(selects.getAllRating ), res);
}

/**DISCOUNT */
const getAllDiscount  = (req, res) => {
    Promise(generateDisplay(selects.getAllDiscount ), res);
}

/**HAVE-REDUCE-PRICE */
const getAllHave_reduce_price = (req, res) => {
    Promise(generateDisplay(selects.getAllHave_reduce_price), res);
}


/**HAVE REDUCE PRICE CONFERENCE ROOM */
const getAllHave_reduce_price_conference_room = (req, res) => {
    Promise(generateDisplay(selects.getAllHave_reduce_price_conference_room), res);
}

export default getAll ={
    getAllCity,
    getAllConference_room,
    getAllDiscount,
    getAllHave_reduce_price_conference_room,
    getAllHave_room_option,
    getAllHotel,
    getAllPayement_method,
    getAllRating,
    getAllReservation,
    getAllRole,
    getAllRoom,
    getAllRoom_option,
    getAllRoom_type,
    getAllUser,
    getAllHave_reduce_price
}
