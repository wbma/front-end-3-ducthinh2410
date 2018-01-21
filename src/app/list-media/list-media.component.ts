import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { Observable } from 'rxjs/Observable';
import { DigitransitService } from '../services/digitransit.service';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.css']
})
export class ListMediaComponent implements OnInit {

  imagesURL: string[] = [];
  stops: any[] = [];
  constructor(private mediaService: MediaService, private digitransitService: DigitransitService) { }

  ngOnInit() {
    this.mediaService.getAllMedia().subscribe(files => {
      files.map(file => {
        this.mediaService.getImageFileById(file.fileId).subscribe(imageFile => this.imagesURL.push(imageFile.downloadImageURL));
      });
    });
  }

  search(stopName: string) {
    this.digitransitService.routesPassStop(stopName).subscribe(res => {
      this.stops = res['data'].stops;
    });
  }

}
