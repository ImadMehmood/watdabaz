const Venue = require("../../models/venue");
const bcrypt = require("bcryptjs");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/"); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.fieldname + "-" + uniqueSuffix + "-" + file.originalname;
    console.log("File uploaded with name:", filename); 
    cb(null, filename);
  },
});

const upload = multer({ storage: storage }).single("Image");

const registerVenue = async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return next(err);
    }

    const {
      VenueName,
      Password,
      PhoneNumber,
      Email,
      Street,
      Region,
      Metrohub,
      City,
      Genre,
      Dancing,
      CoverCharge,
      LGBTQ,
      TemporaryClosed,
      Direction,
      FacebookLink,
      OtherSocialMediaLink1,
      OtherSocialMediaLink2,
      About,
      WhatDaBuzzName,
      WhatDaBuzzNumber,
    } = req.body;

    // Access the uploaded file via req.file
    const imageFile = req.file;

    try {
      const venueExists = await Venue.findOne({ Email });
      if (venueExists) {
        return res.status(400).json({ message: `Email already exists: ${Email}` });
      }

      const hashedPassword = await bcrypt.hash(Password, 10);

      const venue = await Venue.create({
        VenueName,
        Password: hashedPassword,
        PhoneNumber,
        Email,
        Street,
        Region,
        Metrohub,
        City,
        Genre,
        Dancing,
        CoverCharge,
        LGBTQ,
        TemporaryClosed,
        Direction,
        FacebookLink,
        OtherSocialMediaLink1,
        OtherSocialMediaLink2,
        About,
        WhatDaBuzzName,
        WhatDaBuzzNumber,
        Image: imageFile ? imageFile.path : "", 
      });

      if (venue) {
        return res.status(200).json({
          message: "Successfully created new venue",
          VenueName,
          Email,
        });
      } else {
        const error = new Error("Failed to create a new venue");
        error.status = 400;
        throw error;
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  });
};

module.exports = registerVenue;
