import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  id: string;
  id$: Observable<string>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = route.snapshot.params['id'];
    this.id$ = route.params.pipe(map(params => params['id']))
  }

  ngOnInit(): void {
  }

}
