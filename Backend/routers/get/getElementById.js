import { Promise } from "../AccesALaBase.js";
import selects from "../../Requêtes/SelectAll/FirstSelect.js";
import { generateId } from "../../Generer/GenererId.js";

let getId;

/**ROLE */
const getRoleId = (req, res) => {
    Promise(generateId (selects.getRoleId, req.params.id), res);
}

/**USER */
const getUserId = (req, res) => {
    Promise( generateId (selects.getUserId, req.params.id), res);
}

/**PAYEMENT METHOD */
const getPayment_methodId  = (req, res) => {
    Promise( generateId(selects.getPayment_methodId , req.params.id), res);
}

/**CITY */
const getCityId  = (req, res) => {
    Promise( generateId(selects.getCityId , req.params.id), res);
}

/**HOTEL */
const getHotelId  = (req, res) => {
    Promise( generateId(selects.getHotelId , req.params.id), res);
}

/**ROOM-TYPE  */
const getRoom_typeId = (req, res) => {
    Promise( generateId(selects.getRoom_typeId, req.params.id), res);
}

/**ROOM */
const getRoomId = (req, res) => {
Promise( generateId(selects.getRoomId, req.params.id), res);
}

/**ROOM OTION */
const getRoom_optionId = (req, res) => {
    Promise( generateId(selects.getRoom_optionId, req.params.id), res);
}

/**HAVE ROOM OTPION */
const getHave_room_optionId = (req, res) => {
    Promise( generateId(selects.getHave_room_optionId , req.params.id), res);
}

/**ROOM */
const getConference_roomId  = (req, res) => {
    
    Promise( generateId(selects.getConference_roomId , req.params.id), res);
}

/**RESERVATION */
const getReservationId = (req, res) => {
    Promise( generateId(selects.getReservationId, req.params.id), res);
}

/**RATING */
const getRatingId  = (req, res) => {
    Promise( generateId(selects.getRatingId , req.params.id), res);
}

/**DISCOUNT */
const getDiscountId = (req, res) => {
    Promise( generateId(selects.getDiscountId , req.params.id), res);
}

/**HAVE REDUCE PRICE */
const getHave_reduce_priceId = (req, res) => {
Promise( generateId(selects.getHave_reduce_priceId , req.params.id), res);
}

//**HAVE REDUCE PRICE CONFERENCE ROOM */
const getHave_reduce_price_conference_roomId  = (req, res) => {
    Promise( generateId(selects.getHave_reduce_price_conference_roomId, req.params.id), res);
}


export default getId = {
   getCityId,
   getConference_roomId,
   getDiscountId,
   getHave_reduce_priceId,
   getHave_reduce_price_conference_roomId,
   getHave_room_optionId,
   getHotelId,
   getPayment_methodId,
   getRatingId,
   getReservationId,
   getRoleId,
   getRoomId,
   getRoom_optionId,
   getRoom_typeId,
   getUserId,
}