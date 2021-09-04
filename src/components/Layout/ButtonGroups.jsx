import Button from '../Button';
import classes from '../css/buttonGroups.module.css';

const ButtonGroups = ({ handelSearch }) => (
    <section className={classes.buttonGroup}>
        <h2>Todo List</h2>
        <div className={classes.buttons}>
            <Button
                type="button"
                text="All"
                value="all"
                onClick={(e) => handelSearch(e.target.value)}
            />
            <Button
                type="button"
                text="Done"
                value="done"
                onClick={(e) => handelSearch(e.target.value)}
            />
            <Button
                type="button"
                text="Todo"
                value="todo"
                onClick={(e) => handelSearch(e.target.value)}
            />
        </div>
    </section>
);

export default ButtonGroups;
