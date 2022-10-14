import React, { Component } from "react";
import M from "materialize-css";

export default function NavBar() {
  return (
      <nav class="#263238 blue-grey darken-4" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo"><img src="../assets/img/logo.png" alt="" class="logoImg" /><i
          class="text-logo">ZapatiYa!</i> </a>

      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down" >
        <li>
          <div class="input-field #37474f blue-grey darken-3">
            <input id="search" type="search" class="searchInput" data-search required />
            <label class="label-icon" for="search"><a href="#"><i class="material-icons">search</i></a></label>
            <i class="material-icons">close</i>
          </div>
        </li>
         
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Login</a></li>
        <li><a class='dropdown-trigger btn' href='#' data-target='dropdown1'><i class="material-icons">shopping_cart</i></a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Login</a></li>
        <li><a class='dropdown-trigger btn' href='#' data-target='dropdown1'><i class="material-icons">shopping_cart</i></a></li>
        <li>
          <div class="input-field teal lighten-2">
            <input id="search" type="search" class="searchInput" data-search required />
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
      </li>
      </ul>
    </div> 

  </nav>
  );
}
