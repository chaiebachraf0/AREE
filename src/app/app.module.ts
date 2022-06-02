import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingCounterComponent } from './components/listing-counter/listing-counter.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { ToastModule } from "primeng/toast";
import {TreeTableModule} from 'primeng/treetable';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ContextMenuModule} from 'primeng/contextmenu';


@NgModule({
  declarations: [
    AppComponent,
    ListingCounterComponent,
    LoginComponent
  ],
  imports: [
    ButtonModule,InputTextModule,
    DialogModule,
    BrowserModule,MultiSelectModule,ContextMenuModule,
    AppRoutingModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    TreeTableModule,BrowserModule,
    BrowserAnimationsModule,
    TreeTableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    MultiSelectModule,
    InputTextModule,
    ContextMenuModule,
    HttpClientModule,
    FormsModule,


    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
