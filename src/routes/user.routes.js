import express from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage, getUserChannelProfile, getWatchHistory } from "../controllers/user.controller.js";
import { upload } from "../middlewares/Multer.middleware.js";
import { verifyJWT } from "../middlewares/Auth.middleware.js";
const router = express.Router();

router.post("/register", upload.fields([{ name: "avatar", maxCount: 1 }, { name: "coverImage", maxCount: 1 }]), registerUser);
router.post('/login', loginUser);
// secured routes
router.post('/logout', verifyJWT, logoutUser);
router.post('/refresh-token', refreshAccessToken);

router.post('/change-password', verifyJWT, changeCurrentPassword)
router.get('/current-user', verifyJWT, getCurrentUser)
router.patch('/update-account', verifyJWT, updateAccountDetails)
router.patch('/update-avatar', verifyJWT, upload.single("avatar"), updateUserAvatar)
router.patch('update-coverImage', verifyJWT, upload.single('coverImage'), updateUserCoverImage)
router.get('/c/:username', verifyJWT, getUserChannelProfile)
router.get('/watch-history', verifyJWT, getWatchHistory)

export default router;