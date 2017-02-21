import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  // selectedHero: Hero;
  selectedId: number;

  constructor(private router: Router,
              private heroService: HeroService,
              private route: ActivatedRoute) {
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }

  ngOnInit(): void {
    // this.getHeroes();
    this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.heroService.getHeroes();
      });
  }

  onSelect(hero: Hero): void {
    // this.selectedHero = hero;
    this.router.navigate(['hero', hero.id]);
  }

  isSelected(hero: Hero) {
    return hero.id === this.selectedId;
  }

}
