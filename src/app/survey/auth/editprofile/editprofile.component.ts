import { Component} from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../../model/auth.service";
import { User } from "../../../model/user.model";
import { UserRepository } from "../../../model/user.repository";

@Component({
    selector: 'app-editprofile',
    templateUrl: "editprofile.component.html"
})
export class EditprofileComponent  {
    

    editing: boolean = false;
    item: User = new User();

    constructor(public auth: AuthService, private repository: UserRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
            this.item = repository.getItem(activeRoute.snapshot.params["username"]);
            console.log(this.item);
        
          
    }

    save(form: NgForm) {
        
        this.repository.saveUser(this.item);
        this.router.navigateByUrl("users/userprofile");
        console.log(this.item);
    }
    
}
