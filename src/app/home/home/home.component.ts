import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { PrimeIcons } from 'primeng/api'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }


  /*$(window).scroll(function(){
    var scroll: $(window).scrollTop();

    if(scroll > 100){
      $('.menu').addClass('.menu-secundario');
    }else{
      $('.menu').removeClass('.menu-secundario');
    }
  });*/

  function(){
    var menu: any = document.getElementById('menus');
    window.addEventListener('scroll', function(){
      if (this.window.scrollY > 10) menu.classList.add('menu-secundario');
      else menu.classList.remove('menu-secundario');
      console.log("scrollado");
    });
  };

  
  constructor (private viewportScroller: ViewportScroller){};
  scrollTo() {
    this.viewportScroller.scrollToAnchor('projetos');
}

}
