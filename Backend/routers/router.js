import express, { Router } from "express";
import getAnswer from "./get/getAnswers.js";
import getId from "./get/getElementById.js";
import getAll from "./get/getAll.js";
import newRequete from "./post/newRequete.js";
import effaces from "./delete/deletes.js";
export const router = express.Router();
;

/**Basic */
router.get("/basic2", getAnswer.basicc2);
router.get("/basic3", getAnswer.basicc3);
router.get("/basic4", getAnswer.basicc4);
router.get("/basic6", getAnswer.basicc6);
router.get("/basic7", getAnswer.basicc7);
router.get("/basic8", getAnswer.basicc8);
router.get("/basic18", getAnswer.basicc18);
router.get("/basic10", getAnswer.basicc10);

/**hard */
router.get("/hard3", getAnswer.hardd3);
router.get("/hard8", getAnswer.hardd10);
router.get("/hard10", getAnswer.hardd8);
router.get("/hard11", getAnswer.hardd11);

/*medium*/
router.get("/medium2", getAnswer.mediumm2);
router.get("/medium3", getAnswer.mediumm3);
router.get("/medium4", getAnswer.mediumm4);
router.get("/medium6", getAnswer.mediumm6);
router.get("/medium7", getAnswer.mediumm7);
router.get("/medium8", getAnswer.mediumm8);
router.get("/medium9", getAnswer.mediumm9);
router.get("/medium12", getAnswer.mediumm12);

// GET ALL 
router.get("/users", getAll.getAllUser);
router.get("/roles", getAll.getAllRole);
router.get("/payment_methods", getAll.getAllPayement_method);
router.get("/citys", getAll.getAllCity);
router.get("/hotels", getAll.getAllHotel);
router.get("/room_types", getAll.getAllRoom_type);
router.get("/rooms", getAll.getAllRoom);
router.get("/room_options", getAll.getAllRoom_option);
router.get("/have_room_options", getAll.getAllHave_room_option);
router.get("/conference_rooms", getAll.getAllConference_room);
router.get("/reservations", getAll.getAllReservation);
router.get("/ratings", getAll.getAllRating);
router.get("/discounts", getAll.getAllDiscount);
router.get("/have_reduce_prices", getAll.getAllHave_reduce_price);
router.get("/have_reduce_price_conferences", getAll.getAllHave_reduce_price_conference_room);


// GET ELEMENT BY ID
router.get("/role/:id", getId.getRoleId);
router.get("/user/:id", getId.getUserId);
router.get("/payment_method/:id", getId.getPayment_methodId);
router.get("/city/:id", getId.getCityId);
router.get("/hotel/:id", getId.getHotelId);
router.get("/room_type/:id", getId.getRoom_typeId);
router.get("/room/:id", getId.getRoomId);
router.get("/room_option/:id", getId.getRoom_optionId);
router.get("/have_room_option/:id", getId.getHave_room_optionId);
router.get("/conference_room/:id", getId.getConference_roomId);
router.get("/reservation/:id", getId.getReservationId);
router.get("/rating/:id", getId.getRatingId);
router.get("/discount/:id", getId.getDiscountId);
router.get("/have_reduce_price/:id", getId.getHave_reduce_priceId);
router.get("/have_reduce_price_conference_room/:id", getId.getHave_reduce_price_conference_roomId);



// POSTs
router.post("/role", newRequete.newRole);
router.post("/user", newRequete.newUser);
router.post("/payement_method", newRequete.newPayement_method);
router.post("/city", newRequete.newCity);
router.post("/hotel", newRequete.newHotel);
router.post("/room_type", newRequete.newRoom_type);
router.post("/room", newRequete.newRoom);
router.post("/room_option", newRequete.newRoom_option);
router.post("/have_room_option", newRequete.newHave_room_option);
router.post("/conference_room", newRequete.newConference_room);
router.post("/reservation", newRequete.newReservation);
router.post("/rating", newRequete.newRating);
router.post("/discount", newRequete.newDiscount);
router.post("/have_reduce_price", newRequete.newHave_reduce_price);
router.post("/have_reduce_price_conference_room", newRequete.newHave_reduce_price_conference_room);


// DELETE:
router.delete("/role/:id", effaces.SupprimeRole);
router.delete("/user/:id", effaces.SupprimeUser);
router.delete("/payement_method/:id", effaces.SupprimePayment_method);
router.delete("/city/:id", effaces.SupprimeCity);
router.delete("/hotel/:id", effaces.SupprimeHotel);
router.delete("/room_type/:id", effaces.SupprimeRoom_type);
router.delete("/room/:id", effaces.SupprimeRooom);
router.delete("/room_option/:id", effaces.SupprimeRoom_option);
router.delete("/have_room_option/:id", effaces.SupprimeHave_room_option);
router.delete("/conference_room/:id", effaces.Supprime_conference_room);
router.delete("/reservation/:id", effaces.SupprimeReservation);
router.delete("/rating/:id", effaces.SupprimeRating);
router.delete("/discount/:id", effaces.SupprimeDiscount);
router.delete("/have_reduce_price/:id", effaces.SupprimeHave_reduce_price);
router.delete("/have_reduce_price_conference_room/:id", effaces.SupprimeHave_reduce_price_conference_room);


