import {Component, OnDestroy, OnInit} from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit , OnDestroy {
   word: any;
   sub: Subscription;

  constructor(
    private dictionaryService: DictionaryService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.activatedRouter.paramMap.subscribe((pM: ParamMap) => {
      const key = pM.get('key');
      this.word = this.dictionaryService.find(key);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
