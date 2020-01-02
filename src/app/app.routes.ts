import { Routes } from "@angular/router";

export const APP_ROUTES = [
    {
        path: "",
        redirectTo: "main/home",
        pathMatch: "full"
    },
    {
        path: "main/home",
        loadChildren: "./main/home/home.module#HomePageModule"
    },
    {
        path: "main/customers",
        loadChildren: "./customers/customers.module#CustomersPageModule"
    },
    {
        path: "main/customers/create",
        loadChildren: "./customers/create/customer-create.module#CustomerCreatePageModule"
    },
    {
        path: "about",
        loadChildren: "./about/about.module#AboutPageModule"
    }
];
