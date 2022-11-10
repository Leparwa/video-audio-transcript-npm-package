import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-transcript-renderer',
  templateUrl: './transcript-renderer.component.html',
  styleUrls: ['./transcript-renderer.component.scss']
})
export class TranscriptRendererComponent  {

  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;

  constructor() { }

  playVideo() {
    if (this.videoPlayer !== undefined){
      this.videoPlayer.nativeElement.play();
    }
  }
  pauseVideo(){
    if (this.videoPlayer !== undefined){
      this.videoPlayer.nativeElement.pause();
    }
  }
}
