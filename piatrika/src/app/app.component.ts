import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'piatrika';

  ngOnInit() {
    $("#wrapper").toggleClass("toggled");
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
        });
        
        this.ToggleNavBar();
           }
           
           ToggleNavBar () {
            let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
            if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
                element.click();
            }
 
        }
   
           
}
