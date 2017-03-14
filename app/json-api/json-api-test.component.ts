import { Component, OnInit } from '@angular/core';

import { Person } from './models';
import { ResourceStoreService } from './json-api.service';


@Component({
  moduleId: module.id,
  selector: 'json-api-test',
  templateUrl: 'json-api-test.component.html'
  // templateUrl: 'dashboard.component.html',
  // styleUrls: ['dashboard.component.css']
})
export class JsonApiTestComponent implements OnInit {
  people: Person[] = [];

  constructor(
    private store: ResourceStoreService
  ) {}

  ngOnInit(): void {
    this.articles = this.store.getResources(
      'articles',
      [['author'], ['comments', 'author']]
    );
    console.log("/articles?include=author,comments.author");
    console.log(this.articles);
  }
}
