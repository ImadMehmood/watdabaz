const Artist = require("../../models/artist");
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

const registerArtist = async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return next(err);
    }

    const {
      ArtistName,
      Password,
      Email,
      Region,
      Metrohub,
      Genre,
      WebsiteLink,
      FacebookLink,
      OtherSocialMediaLink1,
      OtherSocialMediaLink2,
      WhatDaBuzzName,
      WhatDaBuzzNumber,
      WhatDaBuzzNameLive,
      WhatDaBuzzNumberLive,
    } = req.body;

    const imageFile = req.file;

    try {
      const artistExists = await Artist.findOne({ Email });
      if (artistExists) {
        return res
          .status(400)
          .json({ message: `Artist already exists by this email: ${Email}` });
      }

      const hashedPassword = await bcrypt.hash(Password, 10);

      const artist = await Artist.create({
        ArtistName,
        Password: hashedPassword,
        Email,
        Region,
        Metrohub,
        Genre,
        WebsiteLink,
        FacebookLink,
        OtherSocialMediaLink1,
        OtherSocialMediaLink2,
        WhatDaBuzzName,
        WhatDaBuzzNumber,
        WhatDaBuzzNameLive,
        WhatDaBuzzNumberLive,
        Image: imageFile ? imageFile.path : "",
      });

      if (artist) {
        return res.status(200).json({
          message: "Successfully created new artist",
          ArtistName,
          Email,
        });
      } else {
        const error = new Error("Failed to create new artist");
        error.status = 400;
        throw error;
      }
    } catch (error) {
      return next(error);
    }
  });
};

module.exports = registerArtist;
