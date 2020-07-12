import path from "path";
import crypto from "crypto";
import multer from "multer";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");

const uploadConfig = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
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
