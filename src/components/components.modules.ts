import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {EditProfileFormComponent} from "./edit-profile-form/edit-profile-form.component";
import {ProfileViewComponent} from "./profile-view/profile-view";
import {ProfileSearchComponent} from "./profile-search/profile-search";
import {SendmessageboxComponent} from "./sendmessagebox/sendmessagebox.component";
import {ChatMessageComponent} from "./chat-message/chat-message.component";
import {ChannelListComponent} from "./channel-list/channel-list";
import {OnlineUsersComponent} from "./online-users/online-users";

@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,
        ProfileSearchComponent,
        SendmessageboxComponent,
        ChatMessageComponent,
        ChannelListComponent,
        OnlineUsersComponent
    ],
    imports: [IonicModule],
    exports: [ LoginFormComponent, 
        RegisterFormComponent, 
        EditProfileFormComponent, 
        ProfileViewComponent,
        ProfileSearchComponent,
        SendmessageboxComponent,
        ChatMessageComponent,
        ChannelListComponent,
        OnlineUsersComponent]
})

export class ComponentsModule{
}