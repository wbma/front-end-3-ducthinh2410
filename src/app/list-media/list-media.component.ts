import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.css']
})
export class ListMediaComponent implements OnInit {

  imagesURL: string[] = [];

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getAllMedia().subscribe(files => {
      files.map(file => {
        this.mediaService.getImageFileById(file.fileId).subscribe(imageFile => this.imagesURL.push(imageFile.downloadImageURL));
      });
    });
  }

}
