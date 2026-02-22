import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";
import * as dotenv from "dotenv";

dotenv.config();

const accessKeyId = process.env.FILE_BASE_ACCESS ?? "58EB586065DB3B9EA293";
const secretAccessKey = process.env.FILE_BASE_SECRET ?? "11ooB7cgccvTVuaxrVgXjoK8IjCPgJD6yPiuILA4";

const s3 = new S3Client({
  region: "us-east-1",
  endpoint: "https://s3.filebase.com",
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
  forcePathStyle: true,
});

export const getURI = async () => {
    try {
      const data = await s3.send(new ListBucketsCommand({}));
      console.log("Success when listing buckets", data);
    } catch (err) {
      console.log("Error when listing buckets", err);
    }
}