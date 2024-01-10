import React from 'react'
 import style from "./Search.module.css"
 import search from "../../assets/images/searchPng.png"
export const Search = () => {
  return (
    <div className={style.container}>
    <div>
      <img src={search} alt="search" />
    </div>
        Enter something to search   
    </div>
  )
}
