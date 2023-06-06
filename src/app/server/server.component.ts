import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`.online {background-color : lime;}`]
})

export class ServerComponent {

    serverId = 10;
    serverStatus = 'online'
    pokemon = "cat";
}