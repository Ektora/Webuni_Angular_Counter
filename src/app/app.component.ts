import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Első Angularos alkalmazásom';
  counter = {name: 'Mosogatás', id : 3};
  logoSrc = "data:image/png;base64,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"
  aim = 5;
  countChanged(count: number) {
    if(count === this.aim){
      alert('Elértük a célt!');
    }
  };
}
