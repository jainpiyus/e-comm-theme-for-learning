import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  query = [
    {
      question: 'Product price',
      answer: 'Our pricing model is transparent and fair. Price depends on the number of operator seats. You can create an unlimited number of agents in every plan. Seats determine the number of agents who can be logged to LiveChat at the same time'
    },
    {
      question: 'Free trail',
      answer: 'Our pricing model is transparent and fair. Price depends on the number of operator seats. You can create an unlimited number of agents in every plan. Seats determine the number of agents who can be logged to LiveChat at the same time'
    },
    {
      question: 'Talk to agent',
      answer: 'Our pricing model is transparent and fair. Price depends on the number of operator seats. You can create an unlimited number of agents in every plan. Seats determine the number of agents who can be logged to LiveChat at the same time'
    },
    {
      question: 'Support Question',
      answer: 'Our pricing model is transparent and fair. Price depends on the number of operator seats. You can create an unlimited number of agents in every plan. Seats determine the number of agents who can be logged to LiveChat at the same time'
    },
    
  ]
  questions = new BehaviorSubject(this.query);
  constructor() { }

}
