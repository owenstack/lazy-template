import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
   
  import type { fileRouter } from "@/server/uploadthing";
   
  export const UploadButton = generateUploadButton<fileRouter>();
  export const UploadDropzone = generateUploadDropzone<fileRouter>();