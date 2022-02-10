import { Component, OnInit } from '@angular/core';
import { QuestionTwoService } from 'src/service/question-two.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  dataTable : any | undefined;
  dataTableRaw: any | undefined;

  filterString : string | undefined = '';

  constructor(private questionTwoService:QuestionTwoService) {
    this.GetData()
  }

  async ngOnInit(): Promise<void> {

  }

  async GetData(){
    try {
      this.dataTable = await this.questionTwoService.getData().toPromise()
      this.dataTableRaw = await this.questionTwoService.getData().toPromise()
    } catch (error) {
      console.log(`error : ${error}`)
    }

    console.log(`this.dataTable : ${JSON.stringify(this.dataTable)}`)
  }

  async onKeyUp(event: any){
    let filterKeyWord : string = event.target.value.toLowerCase()
    if(filterKeyWord){
      this.dataTable.categories = []
      for(let item of this.dataTableRaw.categories){
        if(item.toLowerCase().includes(filterKeyWord)) this.dataTable.categories.push(item)
      }
      this.dataTable.count = this.dataTable.categories.length
      console.log(`this.dataTable.categories : ${JSON.stringify(this.dataTable.categories)}`)

    }else{
      this.dataTable = JSON.parse(JSON.stringify(this.dataTableRaw))
    }
  }

}
