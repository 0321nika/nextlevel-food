import classes from "./meal-grid.module.css"
import MealItem from "./meal-items"
const MealGrid = ({meals}) => {
  return (
    <ul className={classes.meals}>
        {meals.map(meal => <li key={meal.id}>
            <MealItem {...meal}/>
        </li>)}
    </ul>
  )
}

export default MealGrid