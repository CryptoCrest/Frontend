import { Component} from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../../model/auth.service";
import { User } from "../../../model/user.model";
import { UserRepository } from "../../../model/user.repository";

@Component({
    selector: 'app-user',
    templateUrl: "userprofile.component.html"
})
export class UserprofileComponent  {
    
    item: User=new User();
    constructor(public auth: AuthService, private router: Router, private repository: UserRepository, activeRoute: ActivatedRoute)
    {
        this.item.username=auth.username;
        

    }
   
    get userList(): User [] {
        return this.repository.getUser();
        
      
    }
    
}
