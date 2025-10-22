import { v2 as cloudinary } from "cloudinary";
import getEnvVariable from "./envVariable";

cloudinary.config({
    cloud_name: getEnvVariable("CLOUDINARY_CLOUD_NAME", true),
    api_key: getEnvVariable("CLOUDINARY_API_KEY", true),
    api_secret: getEnvVariable("CLOUDINARY_API_SECRET", true),
});

export default cloudinary;
