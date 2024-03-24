const City = require('../models/City');
const validator = require('validator');


const getAllCities = async (req, res) => {
    try {
        const cities = await City.find()
        return res.json({ success: true, cities });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const addCity = async (req,res)=>{
  
       
    const { name } = req.body;


    if (!validator.isLength(name, { min: 1, max: 255 })) {
        return res.status(400).json({ error: 'Le nom est requis.' });
    }


  

    try{


       

        const city = new City({
            name: name,
          
        
        });

        await city.save();

        res.json({ success: true, message: 'City added successfully.' });

    }catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }

}

const deleteCity = async (req, res) => {
    const { id } = req.params;
    try {
        const city = await City.findByIdAndDelete(id);

        

      
        return res.json({ success: true, message: 'City deleted successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};


module.exports={
    getAllCities, 
    addCity,
    deleteCity
};

