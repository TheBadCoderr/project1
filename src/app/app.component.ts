import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project1';
  userDetails : any = [];
  userNames : any = [];
  userNamesToSearch : any;
  imgSrc : any;
  userTitle : any;
  resultClicked : boolean = false;
  historyArr : any;
  historyClicked : boolean = false;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.historyArr = [];
    this.apiService.getUsers().subscribe((data)=>{
      this.userDetails = data;
      this.userDetails.forEach((x: any) => {
        this.userNames.push(x.login);
      });
    });
  }

  clickResult(item:any) {
    this.resultClicked = true;
    this.imgSrc = item.avatar_url;
    this.userTitle = item.login;
    this.historyArr.push(this.userNamesToSearch);
    localStorage.setItem('historyArr', this.historyArr);
    console.log(item)
  }

  keyUpInput() {
    this.resultClicked = false;
    this.historyClicked = false;
  }

  clickSubmit() {
    if(this.userNamesToSearch.length > 0){
      this.historyArr.push(this.userNamesToSearch);
      localStorage.setItem('historyArr', this.historyArr);
    }
    this.historyClicked = false;
  }

  clickHistory() {
    this.historyClicked = true;
  }
}
