const cloudinary = require('../config/cloudinary');
const User = require('../models/user.model');

const uploadProfilePicture = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please upload an image file' });
    }

    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'finance-tracker/avatars',
      transformation: [{ width: 300, height: 300, crop: 'fill' }],
    });

    req.user.avatarUrl = result.secure_url;
    await req.user.save();

    res.status(200).json({
      success: true,
      message: 'Profile picture updated successfully',
      avatarUrl: result.secure_url,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadProfilePicture };