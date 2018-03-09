
// import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Subject } from 'rxjs/Subject';

// import 'rxjs/add/operator/map';

// class Person {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   dtOptions: DataTables.Settings = {};
//   persons: Person[] = [];
//   // We use this trigger because fetching the list of persons can be quite long,
//   // thus we ensure the data is fetched before rendering
//   dtTrigger: Subject<any> = new Subject();

//   constructor(private http: Http) { }

//   ngOnInit(): void {
//     this.dtOptions = {
//       pagingType: 'full_numbers',
//       pageLength: 2
//     };
//     this.http.get('data/data.json')
//       .map(this.extractData)
//       .subscribe(persons => {
//         this.persons = persons;
//         // Calling the DT trigger to manually render the table
//         this.dtTrigger.next();
//       });
//   }

//   private extractData(res: Response) {
//     const body = res.json();
//     return body.data || {};
//   }
// }





import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import { LocalStorageService } from './LocalStorageService';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];


  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http,private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get('assets/data.json')
      .map(this.extractData)
      .subscribe(persons => {
        this.persons = persons;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
        this.localStorageService.setData('data',persons);
      });

     
//this.localStorageService.setData('data',this.persons);
      //localStorage.setItem();
      console.log(this.localStorageService.getData('data'));

      console.log(this.persons);
      
  }

  private extractData(res: Response) {
    const body = res.json();
    //console.log( body.data);
    
    
    return body.data || {};
  }
}