import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Service & Router';

  constructor(private router: Router) {
  }

  gotoTimelines() {
    this.router.navigate(['/timelines']);
  }
}
