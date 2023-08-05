import { generateDelete } from "../../Generer/GenererDelete.js";
import Del from "../../Requêtes/Delete/delete.js";
import { PromiseDelete } from "../AccesALaBase.js";

/**role */
const SupprimeRole = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteRole,[id]), res);
}

/**User*/
const SupprimeUser = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteUser,[id]), res);
}

/*PAYEMENT-METHOD*/
const SupprimePayment_method = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deletePayment_method, [id]), res);
}

/*CITY*/
const SupprimeCity = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteCity, [id]), res);
}

/*HOTEL*/ 
const SupprimeHotel = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteHotel, [id]), res);
}

/*ROOM-TYPE*/
const SupprimeRoom_type = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteRoom_type, [id]), res);
}

/*ROOM*/
const SupprimeRooom = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteRoom, [id]), res);
}

/*ROOM-OPTION*/
const SupprimeRoom_option = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteRoom_option , [id]), res);
}

/*HAVE_ROOM_OPTION*/
const SupprimeHave_room_option = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteRoom_option, [id]), res);
}

/**CONFERENCE ROOM */
const Supprime_conference_room = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteConference_room, [id]), res);
}

/*RESERVATION*/ 
const SupprimeReservation = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteReservation [id]), res);
}

/*RATING*/ 
const SupprimeRating = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteRating, [id]), res);
}

/*DISCOUNT*/
const SupprimeDiscount = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteDiscount, [id]), res);
}

/*Have reduce Price*/ 
const SupprimeHave_reduce_price = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteHave_reduce_price, [id]), res);
}

// customer_status
const SupprimeHave_reduce_price_conference_room = (req, res) => {
    const id = req.params.id;
    PromiseDelete(generateDelete(Del.deleteHave_reduce_price_conference_room, [id]), res);
}

let effaces;
export default effaces={
    SupprimeCity,
    SupprimeDiscount,
    SupprimeHave_reduce_price,
    SupprimeHave_reduce_price_conference_room,
    SupprimeHave_room_option,
    SupprimeHotel,
    Supprime_conference_room,
    SupprimePayment_method,
    SupprimeRating,
    SupprimeReservation,
    SupprimeRole,
    SupprimeRoom_option,
    SupprimeRoom_type,
    SupprimeRooom,
    SupprimeUser,
}