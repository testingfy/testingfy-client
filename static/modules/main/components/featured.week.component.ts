import { Component } from '@angular/core';
import { ElasticSearchService } from './../services/es.service';
import { NavigationService } from './../services/navigation.service';

@Component({
  selector: 'featured-weekly-component',
  templateUrl: './client/modules/main/components/views/featured-weekly-component.html'
})
export class FeaturedWeeklyComponent {
  private _data = null;

  constructor(
    private _esService:ElasticSearchService,
    private _navService:NavigationService) {}

  ngAfterViewInit() {
    this._data = this._esService.getFeaturedWeeklyItems(null);
console.log(this._data);
  }

  private goto = (link) => {
    console.log(link);
// TODO: would have a real "id" later on    
    this._navService.navToItem(-1);
  };

}
