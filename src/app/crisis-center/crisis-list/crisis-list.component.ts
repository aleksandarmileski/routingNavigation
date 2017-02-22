import {Component, OnInit} from '@angular/core';
import {Observable}            from 'rxjs/Observable';
import {Crisis, CrisisService} from "../crisis.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rn-crisis-list',
  templateUrl: 'crisis-list.component.html',
  styleUrls: ['crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises: Observable<Crisis[]>;
  selectedId: number;

  constructor(private service: CrisisService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.crises = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getCrises();
      });
  }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;

    // Navigate with relative link
    this.router.navigate([crisis.id], {relativeTo: this.route});
    // this.router.navigate(['hero', hero.id]);
  }

}
