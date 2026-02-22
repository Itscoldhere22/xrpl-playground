import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";

const accessKeyId = process.env.FILE_BASE_ACCESS ?? "";
const secretAccessKey = process.env.FILE_BASE_SECRET ?? "";

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
        console.log("Suc");
        console.log(accessKeyId);
        console.log(secretAccessKey);
        console.log("Success when listing buckets", data);
    } catch (err) {
        console.log("Fail");
        console.log(accessKeyId);
        console.log(secretAccessKey);
        console.log("Error when listing buckets", err);
    }
}