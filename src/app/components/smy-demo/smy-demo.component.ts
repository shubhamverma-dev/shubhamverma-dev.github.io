import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {getObservable, unsubscribeObservable} from '../../utills/observable';

@Component({
  selector: 'app-smy-demo',
  templateUrl: './smy-demo.component.html',
  styleUrls: ['./smy-demo.component.css']
})
export class SmyDemoComponent implements OnInit {

  constructor() {
  }

  frameId: string = 'yt-frame';
  showFrame: boolean = false;
  frameAvailable: boolean = false;
  sub: Subscription;
  videoUrl: string = "https://youtu.be/jAPwzwHor9E"


  ngOnInit() {
      this.showFrame = true;
      this.sub = getObservable(0, 500, !this.frameAvailable)
        .subscribe(_ => {
          let playerId = document.getElementById('frameId_youtube_api');
          if (playerId) {
            playerId.style['pointerEvents'] = 'none';
            this.frameAvailable = true;
            unsubscribeObservable(this.sub);

          }
        }, error => {
          unsubscribeObservable(this.sub);
        });
  }

  tryDisable() {


    // window.frames[this.frameId].document.oncontextmenu = function(){alert("No way!"); return false;};
  }

}
