import Button from '../Button';
import classes from '../css/footer.module.css';

const Footer = ({ deleteDone, deleteAll }) => (
    <footer className={classes.deleteBtn}>
        <Button
            type="button"
            className={classes.delete}
            onClick={deleteDone}
            text="Delete Done Tasks"
        />
        <Button
            type="button"
            className={classes.delete}
            onClick={deleteAll}
            text="Delete All Tasks"
        />
    </footer>
);

export default Footer;
