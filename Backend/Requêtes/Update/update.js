let updates;
/*role */
const updateRole = `
    UPDATE "role"
         set role_id=$2, 
         role_name=$3,
    WHERE id = $1;
`;

/*user */
const updateUser= `
    UPDATE "room"
           set room_id=$2, 
          hotel_id=$3,
          room_type_id=$4,
    WHERE id = $1;
`;

/*PAYEMENT_METHOD*/
const updatePayment_method = `
    UPDATE "hotel"
         set payment_method_id=$2, 
              payment_method_name=$3,
    WHERE id = $1;
`;

/*CITY*/
const updateCity = `
    UPDATE "city"
        set city_id =$2,
         city_name=$3,
    WHERE id = $1;
`;

/*HOTEL*/
const  updateHotel = `
    UPDATE "hotel"
         set hotel_id=$3,
            hotel_name=$4,
            hotel_address=$5, 
            hotel_is_active=$5, 
            city_id=$6,
    WHERE id = $1;
`;

/*ROOM-TYPE*/
const updateRoom_type = `
    UPDATE "room_type"
         set room_type_id=$2, 
         room_type_name=$3,
          room_type_base_price=$4,
    WHERE id = $1;
`;

/*ROOM*/
const updateRoom = `
    UPDATE "room"
         set room_id=$2, 
         hotel_id=$3,
          room_type_id=$4,
    WHERE id = $1;
`;

/*ROOM-OPTION*/
const updateRoom_option = `
    UPDATE "room_option"
         set  room_option_id=$2, 
         room_option_name=$3,
          room_option_description=$4,
           room_option_price=$5,
    WHERE id = $1;
`;

/*HAVE-ROOM-TYPE*/
const  updateHave_room_option = `
    UPDATE "have_room_option"
         set have_room_option_id=$2, 
            room_id=$3,
            room_option_id=$4,
    WHERE id = $1;
`;

/*CONFERENCE-ROOM*/
const updateConference_room = `
    UPDATE "conference_room "
        set conference_room_id=$2, 
          conference_room_capacity=$3, 
           conference_room_price_per_hour=$4,
          hotel_id=$5,
    WHERE id = $1;
`;



/*RESERVATION*/
const updateReservation = `
    UPDATE "reservation"
         set reservation_id=$2, 
         creation_timestamp=$3, 
         start_timestamp=$4,
          end_timestamp=$5,
           special_requests=$6, 
           is_paid, is_canceled=$7, 
           penalty_rate, room_id=$8,
            conference_room_id=$9, 
            user_id, payment_method_id=$10,
    WHERE id = $1;
`;

/*RATING*/
const updateRating = `
    UPDATE "rating"
         set rating_id =$2,
          rating_rate=$3,
           rating_comment=$4, 
           hotel_id, user_id=$5,
    WHERE id = $1;
`;

/*DISCOUNT*/
const updateDiscount = `
    UPDATE "discount"
         set discount_id=$2,
            discount_name=$3, 
            discount_rate=$4, 
            discount_start=$5,
           discount_end=$6,
    WHERE id = $1;
`;

/*HAVE-REDUCE-PRICE-*/
const  updateHave_reduce_price = `
    UPDATE "have_reduce_price"
         set have_reduced_price_id=$2,
          room_type_id=$3,
          discount_id=$4,
    WHERE id = $1;
`;

/*HAVE-REDUCE-PRICE-CONFERENCE-ROOM*/
const updateHave_reduce_price_conference_room = `
    UPDATE "have_reduce_price_conference_room"
         set have_reduced_price_conference_room_id=$2, 
            conference_room_id=$3, 
            discount_id=$4,
    WHERE id = $1;
`;


export default update = {
    updateCity,
    updateConference_room,
    updateDiscount,
    updateHave_reduce_price,
    updateHave_reduce_price_conference_room,
    updateHave_room_option,
    updateHotel,
    updatePayment_method,
    updateRating,
    updateReservation,
    updateRole,
    updateRoom,
    updateRoom_option,
    updateRoom_type,
    updateUser,
}
