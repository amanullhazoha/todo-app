import Button from '../Button';
import classes from '../css/footer.module.css';

const Footer = () => (
    <footer className={classes.deleteBtn}>
        <Button type="button" className={classes.delete} text="Delete Done Tasks" />
        <Button type="button" className={classes.delete} text="Delete All Tasks" />
    </footer>
);

export default Footer;
