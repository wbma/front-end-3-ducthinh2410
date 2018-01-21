export class MediaFile {
  fileId: number;
  mediaType: string;

  constructor(file_id: number, media_type: string) {
    this.fileId = file_id;
    this.mediaType = media_type;
  }
}
