import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { Content } from './content';
import { ContentList } from './content-list';
import { ContentService } from './services/content.service';
import { LogUpdateService } from './services/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cardClasses = ['is-first', 'is-even', 'is-odd'];

  constructor(
    private logService: LogUpdateService,
    private appRef: ApplicationRef,
    // so we can check stability
    private updates: SwUpdate
  ) // so we can check for updates
  {}

  ngOnInit(): void {
    this.logService.init();

    // Allow the app to stabilize first
    // then poll for updates with interval()
    const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );
    const everyHour$ = interval(1 * 60 * 60 * 1000);
    const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);
    everyHourOnceAppIsStable$.subscribe(() => this.updates.checkForUpdate());


    // this.contentService.updateContentItem({
    //   id: 0,
    //   // add rest of properties for a valid content item
    // }).subscribe(contentList => {
    //   console.log(contentList);
    // })

    // this.contentService.deleteContentItem(1).subscribe(() => { });
  }
}
