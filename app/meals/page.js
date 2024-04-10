import classes from "./page.module.css"
import Link from "next/link"
import React, { Suspense } from 'react'
import MealGrid from "../components/meals/meal-grid"
import { getMeals } from "../lib/meals"

async function Meals(){
  const meals = await getMeals();
  return <MealGrid meals={meals}/>
}

export default function mealsPage()  {
 
  return (
    <>
    <header className={classes.header}>
      <h1>Delicous Meals,created <span className={classes.highligt}>by you</span> </h1>
      <p>Choose yor favourite recipe and cook it yourself.it is easy and fun!</p>
      <p className={classes.cta}>
        <Link href="/meals/share">
          Share your favorite recipe
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Loading . . .</p>}>
        <Meals/>
      </Suspense>
    </main>
    </>
  )
}