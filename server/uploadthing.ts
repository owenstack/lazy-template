import {createUploadthing, type FileRouter} from "uploadthing/next-legacy";

const f = createUploadthing();

let uploadedFileUrls: string[] = []

export const fileRouter = {
  imageUploader: f({image:{maxFileCount:5, maxFileSize: '1GB'}})
  .onUploadComplete(async ({file}) => {
    uploadedFileUrls.push(file.url)
    return [...uploadedFileUrls];
  })
} satisfies FileRouter;

export type fileRouter = typeof fileRouter;
