import "rxjs/add/operator/map";

export class ImageFile implements Image {

  id: number;
  fileName: string;
  size: number;
  title: string;
  description: string;
  userId: number;
  mediaType: string;
  mimeType: string;
  timeAdded: string;
  thumbnails: Thumbnails;
  downloadImageURL: string;

  constructor(raw: Object) {
    this.id = raw["file_id"];
    this.fileName = raw["filename"];
    this.description = raw["description"];
    this.userId = raw["user_id"];
    this.mediaType = raw["media_type"];
    this.mimeType = raw["mime_type"];
    this.timeAdded = raw["time_added"];

    let thumbnailsData = raw["thumbnails"];
    this.thumbnails = {} as Thumbnails;
    this.thumbnails["160"] = thumbnailsData["160"];
    this.thumbnails["320"] = thumbnailsData["320"];
    this.thumbnails["640"] = thumbnailsData["640"];
  }
}

export interface Image {
  id: number;
  fileName: string;
  size: number;
  title: string;
  description: string;
  userId: number;
  mediaType: string;
  mimeType: string;
  timeAdded: string;
  thumbnails: Thumbnails;
  downloadImageURL: string;
}

export interface Thumbnails {
  "160": string;
  "320": string;
  "640": string;
}
