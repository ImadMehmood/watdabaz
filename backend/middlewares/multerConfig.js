const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded image (e.g., using a timestamp)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.fieldname + "-" + uniqueSuffix + "-" + file.originalname;
    console.log("File uploaded with name:", filename); // Add this line for debugging
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
