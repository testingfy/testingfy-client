import { Component } from '@angular/core';
import { ElasticSearchService } from './../services/es.service';
import { NavigationService } from './../services/navigation.service';

@Component({
  selector: 'slide-carousel-component',
  templateUrl: './client/modules/main/components/views/slide-carousel-component.html'
})
export class SlideCarouselComponent {
  private _data = null;

  constructor(
    private _esService:ElasticSearchService,
    private _navService:NavigationService) {}

  ngAfterViewInit() {
    this._data = this._esService.getSuggestionsBasedOnItem(null);
  }

  private goto = (item) => {
    console.log(item);
// TODO: fwd by _navService
    console.log(this._navService);
  };

}
