import { Component, OnInit } from '@angular/core';
// import videojs from 'video.js'

@Component({
  selector: 'app-smy-demo-new',
  templateUrl: './smy-demo-new.component.html',
  styleUrls: ['./smy-demo-new.component.css']
})
export class SmyDemoNewComponent implements OnInit {

  constructor() { }
  public videoJsConfigObj = {
    preload: "metadata",
    controls: true,
    autoplay: true,
    overrideNative: true,
    techOrder: ["youtube"],
    html5: {
      nativeVideoTracks: false,
      nativeAudioTracks: false,
      nativeTextTracks: false,
      hls: {
        withCredentials: false,
        overrideNative: true,
        debug: true
      }
    }
  };
  ngOnInit() {

    // var player = videojs('my-video', this.videoJsConfigObj);

  }


}
