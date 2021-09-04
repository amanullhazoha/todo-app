import Button from '../Button';
import classes from '../css/buttonGroups.module.css';

const ButtonGroups = () => (
    <section className={classes.buttonGroup}>
        <h2>Todo List</h2>
        <div className={classes.buttons}>
            <Button type="button" text="All" />
            <Button type="button" text="Done" />
            <Button type="button" text="Todo" />
        </div>
    </section>
);

export default ButtonGroups;
