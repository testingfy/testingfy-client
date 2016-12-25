import { Component } from '@angular/core';
import { ElasticSearchService } from './../services/es.service';

@Component({
  selector: 'search-textbox',
  templateUrl: './client/modules/main/components/views/search-textbox.html'
})
export class SearchTextboxComponent {
  private _searchMode:boolean = false;
  private _textForSearch:string = '';
  private _dataList:any = null;

  /**
   *  ctor (injecting ElasticSearchService)
   */
  constructor(private _esService:ElasticSearchService) {}

  private toggleSearch = ():void => {
    this._searchMode = !this._searchMode;
    // reset
    if (this._searchMode == false) {
      this._dataList = null;
      this._textForSearch = null;
    }
  };

  private doSearch = (event):void => {
// TODO: in real world, might need a throttle (not real time search... overloading the elastic-search)

    // check if need to search or reset the dataList or not
    if (this._textForSearch=='') {
      this._dataList = null;
      
    } else {
      // reset
      this._dataList = null;
      this._dataList = this._esService.fullTextSearch(this._textForSearch);
    }
  };
}
