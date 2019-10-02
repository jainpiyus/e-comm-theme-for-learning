import { Component, OnInit } from '@angular/core';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  
})
export class HelpComponent implements OnInit {

  questions: any;
  answer = [];
  chat = [];
  suggestEnable: boolean = true;
  constructor(private _helpService: HelpService) {  
  }

  ngOnInit() {
    this._helpService.questions.subscribe(res => {
      this.questions = res;
    });
    const a = {
      sent: [
        {
          text: 'hello how are you?'
        },
        {
          text: 'How may i help you?'
        }
      ],
      receive: {
        text: 'I am piyush Jain'
      }
    }
    this.chat.push(a);
  }
  send(index) {
    const tempChat = {
      sent: [
        {
          text: this.questions[index].answer
        }
      ],
      receive: {
        text: this.questions[index].question
      }
    }
    this.suggestEnable = false;
    this.chat.push(tempChat);
    setTimeout(this.updateScroll,200);   
  }
  updateScroll(){
    var objDiv = document.getElementById("chatBoxBody");
     objDiv.scrollTop = objDiv.scrollHeight-40;
      //window.scrollTo(500, 0);
  }
 
  chatToggel() {
    if (document.getElementById("helpBox").style.display !== "block") {
      document.getElementById("helpBox").style.display = "block";
    } else {
      document.getElementById("helpBox").style.display = "none";
    }
  }

  suggestOptions() {
    this.suggestEnable = true;
  }

}
