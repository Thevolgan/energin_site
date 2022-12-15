import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = 'energin_site';


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
