import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranscriptHandlerRoutingModule } from './transcript-handler-routing.module';
import { TranscriptRendererComponent } from './transcript-renderer/transcript-renderer.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TranscriptRendererComponent
  ],
  exports: [
    TranscriptRendererComponent
]
})
export class TranscriptHandlerModule { }
