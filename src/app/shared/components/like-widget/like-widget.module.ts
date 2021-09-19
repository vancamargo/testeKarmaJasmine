import { UniqueIdService } from './../../services/uniqueId/unique-id.services';
import { LikeWidgetComponent } from './like-widget.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[LikeWidgetComponent],
  providers:[UniqueIdService]
})
export class LikeWidgetModule { }
