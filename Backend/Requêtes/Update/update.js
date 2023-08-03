let updates;

const updateUser = `
    UPDATE "city"
        set city_id =$2,
         city_name=$3,
    WHERE id = $1;
`;


const updateDiscount = `
    UPDATE "discount"
         set discount_id=$2,
            discount_name=$3, 
            discount_rate=$4, 
            discount_start=$5,
           discount_end=$6,
    WHERE id = $1;
`;

const updateHave_reduce_price_conference_room = `
    UPDATE "have_reduce_price_conference_room"
         set have_reduced_price_conference_room_id=$2, 
            conference_room_id=$3, 
            discount_id=$4,
    WHERE id = $1;
`;


const  updateHave_reduce_price = `
    UPDATE "have_reduce_price"
         set have_reduced_price_id=$2,
          room_type_id=$3,
          discount_id=$4,
    WHERE id = $1;
`;

const  updateHave_room_option = `
    UPDATE "have_room_option"
         set have_room_option_id=$2, 
            room_id=$3,
            room_option_id=$4,
    WHERE id = $1;
`;


const  updateHotel = `
    UPDATE "hotel"
         set hotel_id=$3,
            hotel_name=$4,
            hotel_address=$5, 
            hotel_is_active=$5, 
            city_id=$6,
    WHERE id = $1;
`;


const payment_method = `
    UPDATE "hotel"
         set payment_method_id=$2, 
              payment_method_name=$3,
    WHERE id = $1;
`;
