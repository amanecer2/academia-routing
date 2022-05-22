import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = 'not me'
  name$!: Observable<string>
  adds$!: Observable<string>
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['userName']
    this.adds$ = this.route.queryParams.pipe(
      map(params => params['adds'])
    )
    this.name$ = this.route.params.pipe(
      map(params => params['userName'])
    );
  }

}
