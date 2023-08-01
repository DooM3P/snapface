import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { Observable, filter, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
          `Je suis ${value} et je suis pair` :
          `Je suis ${value} et je suis impair`
      ),
      tap(text => this.logger(text))
      );
    }

  logger(text: string): void {
    console.log(`Log: ${text}`);
    }
}
