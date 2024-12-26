import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'RxJSLearn';

  postsArray = [
    {tittle: 'Leela2', description: ' leela1 description'},
    {tittle: 'Leela2', description: ' leela description'},
    {tittle: 'Leela3', description: ' leela description'}
  ]

   // convert Promise into observable
  promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve('resolve the promise');
    }, 3000);
    // here after the 3 second the resolve will execute

  })

  promiseObserable$ = from(this.promise)

  // convert javascript array of object into observable

  postsArrayObservable$ = from(this.postsArray);

  constructor(){
    this.postsArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete done'),
    })

    this.promiseObserable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete done promise'),
    })

  }
  // fromEvent convert event into observable, when the user click the button then observable get the data
  ngAfterViewInit()
  {
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete done promise event '),
    })
  }
}
