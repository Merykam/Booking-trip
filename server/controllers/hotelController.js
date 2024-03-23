const Hotel = require('../models/Hotels');
const validator = require('validator');


const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find()
        return res.json({ success: true, hotels });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const addHotel= async (req,res)=>{
  
       
    const { name } = req.body;


    if (!validator.isLength(name, { min: 1, max: 255 })) {
        return res.status(400).json({ error: 'Le nom est requis.' });
    }


  

    try{


       

        const hotel = new Hotel({
            name: name,
          
        
        });

        await hotel.save();

        res.json({ success: true, message: 'Hotel added successfully.' });

    }catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }

}

module.exports={
     getAllHotels, 
     addHotel
};

