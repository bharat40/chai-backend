import { Tweet } from "../models/tweet.model.js"
import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    const { content } = req.body;
    const ownerId = req.user._id

    if (!content) {
        throw new ApiError(400, "Tweet content should not be empty")
    }

    const newTweet = await Tweet.create({ content: content, owner: ownerId })

    if (!newTweet) {
        throw new ApiError(500, "Something went wrong while creating tweet")
    }

    return res.status(200).json(new ApiResponse(200, newTweet, "new tweet created"))
})

export { createTweet }