import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MediaFile } from '../models/MediaFile';
import { ImageFile, Image } from '../models/Image';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class MediaService {

  images: string[];

  private baseURL: string = "http://media.mw.metropolia.fi/wbma/";
  private allMedia: string = "media/all";
  private media: string = "media/";
  private uploads: string = "uploads/";

  response: any;

  constructor(private http: HttpClient) { }

  // Get all media
  getAllMedia(): Observable<MediaFile[]> {
    return this.http.get(`${this.baseURL}${this.allMedia}`).map(res => {
      let files = res["files"];
      return files.map(file => {return new MediaFile(file.file_id, file.filename)});
    });
  }

  // Get a single media file
  getImageFileById(id: number): Observable<ImageFile> {
    return this.http.get(`${this.baseURL}${this.media}${id}`).map(res => {
      let imageFile = new ImageFile(res);
      imageFile.downloadImageURL = `${this.baseURL}${this.uploads}${imageFile.thumbnails["640"]}`;

      return imageFile;
    });
  }
  
}
