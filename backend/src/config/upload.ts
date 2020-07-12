import path from "path";
import crypto from "crypto";
import multer from "multer";

const uploadConfig = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "tmp"),
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${
        file.originalname
      }*${new Date().getTime()}`;

      return callback(null, fileName);
    },
  }),
};

export default uploadConfig;
