import { Component, Input } from '@angular/core';
import { ProfileItem } from './items/profile.item';
import { UserModel } from '../../../core/models/users/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  @Input()
  public profileItems: ProfileItem[];

  @Input()
  public user: UserModel;

}
