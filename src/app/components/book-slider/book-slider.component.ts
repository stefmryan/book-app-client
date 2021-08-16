import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';


import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/Book';


@Component({
  selector: 'app-book-slider',
  templateUrl: './book-slider.component.html',
  styleUrls: ['./book-slider.component.css']
})
export class BookSliderComponent implements OnInit {
  books:Book[] = [];

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;

  currentLocation:number = 1;
  numOfPapers: number= 3;
  maxLocation:number = this.numOfPapers + 1;

  isFlipped1: boolean = false;
  isFlipped2: boolean = false;
  isFlipped3: boolean = false;

  isTransformBookDiv: boolean = false;
  isTransformPrevBtn: boolean = false;
  isTransformNextBtn: boolean = false;

  //isAtBeginning: boolean = false;

  moveBookDiv: string = "";



  openBook(){
this.isTransformBookDiv = true;
this.isTransformPrevBtn = true;
this.isTransformNextBtn = true;
  }

  closeBook(isAtBeginning:boolean){
    if(isAtBeginning){
      this.moveBookDiv = "translateX(0%)"
    }else{
      this.moveBookDiv = "translateX(100%)"
    }
  }

  goNextPage(){
    if(this.currentLocation < this.maxLocation){
      switch(this.currentLocation){
        case 1:
          this.openBook();
          this.isFlipped1 = true;
          break;
        case 2:
          this.isFlipped2 = true;
          break;
        case 3:
          this.isFlipped3 = true;
          this.closeBook(false);
          break;
        default:
          throw new Error("unknown state");
      }
      this.currentLocation++;
      console.log("next btn pressed");
    }
  }

  goPrevPage(){
    if(this.currentLocation > 1){
      switch(this.currentLocation) {
        case 2:
          this.isTransformBookDiv = false;
          // this.isTransformNextBtn = false;
          // this.isTransformPrevBtn = false;
          this.closeBook(true);
          this.isFlipped1 = false;
          break;
        case 3:
          this.isFlipped2 = false;
          break;
        case 4:
          this.openBook();
          this.isFlipped3 = false;
          break;
        default:
          throw new Error('unknown state');
      }
      this.currentLocation--;
      console.log("pressed prev btn")
    }
  }

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=> this.books = data);
  }

}
