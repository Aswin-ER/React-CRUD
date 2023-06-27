const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Define storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        fs.mkdirSync(uploadDir, { recursive: true }); // Create the destination folder if it doesn't exist
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Generate a unique filename by appending the current timestamp to the original file name
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    }
});

// File filter function
const fileFilter = (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg") {
        cb(new Error("File type is not supported"), false);
        return;
    }
    cb(null, true);
};

// Configure multer with the modified storage and file filter
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
