import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title : string
  @Input() retour : string
  @Input() iconType : string

  constructor() { }

  ngOnInit() {
    /*this.retour = "['/" + this.retour + "']"
    console.log(this.retour)*/
  }

}
