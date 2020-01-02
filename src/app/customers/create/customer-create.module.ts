import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

/**
 * Own
 */
import { CustomerCreatePage } from "./customer-create.page";

const routes: Routes = [
  {
    path: "",
    component: CustomerCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerCreatePage]
})
export class CustomerCreatePageModule {
    constructor() {
        // to do
    }
}
