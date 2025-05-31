import Codebusters from "./../Models/club.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { redisClient } from "../redis.js";

dotenv.config();

export const getClubData = async (req, res) => {
  try {
    const cacheKey = 'club:data';
    try {
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        console.log("Cache hit - serving from Redis");
        return res.status(200).json({
          message: "Fetched from cache successfully",
          club: JSON.parse(cachedData)
        });
      }
    } catch (redisError) {
      console.error("Redis cache error (reading):", redisError);
      // Continue to database fallback
    }

    // 2. Database fallback if cache miss or Redis fails
    let club = await Codebusters.findOne({ name: "Codebusters" });
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }
    
    const responseData = {
      ...club.toObject(),
      password: undefined, // Better than setting to null
      name: undefined
    };

    // 3. Try to cache the data (but don't fail if this doesn't work)
    try {
      await redisClient.setEx(
        cacheKey,
        parseInt(process.env.REDIS_CACHE_TTL || '3600'), // Default 1 hour if not set
        JSON.stringify(responseData)
      );
      console.log("Data cached successfully");
    } catch (cacheError) {
      console.error("Redis cache error (writing):", cacheError);
      // The API call will still succeed, just without caching
    }

    return res.status(200).json({
      message: "Fetched from database successfully",
      club: responseData
    });
  } catch (error) {
    console.error("Error in getClubData:", error);
    return res.status(500).json({ 
      message: "An error occurred",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};