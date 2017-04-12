import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./header.component.scss');
const template = require('./header.component.html');

@Component({
  selector: 'header',
  template: template,
  //styles: [ styles ]
})
export class HeaderComponent {
    private menuItems: Array<MenuItem> = [];
    constructor(private router:Router) {
        //String active = router.isActive() curentRouterState.snapshot.url;
        let hideItems = ["", "**", "login"];
        for(let i=0; i<router.config.length; i++){
            let item = router.config[i];
            if(hideItems.indexOf(item.path) == -1){
                this.menuItems.push({
                    name: item.path,
                    path: item.path,
                    isActive: router.isActive(item.path, false)
                });
            }
        }
        console.log(router);
    }
}
export default HeaderComponent;

interface MenuItem {
    name: String,
    path: String,
    isActive: Boolean
}