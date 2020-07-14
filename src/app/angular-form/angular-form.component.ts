import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})

export class AngularFormComponent {

  items = [];

  constructor(private http: HttpClient){}

  log(x) {
    console.log(x);

  }

  onSubmit() {

    let url = 'url';
    let data = "{'name':'nombre'}";

    this.http.get(url).toPromise().then(data => {
      console.log(data);
      
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push("data[key]");
    });
  }

}
