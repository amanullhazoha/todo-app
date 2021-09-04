import Content from './Content';
import classes from './css/dynamicContent.module.css';

const DynamicContent = () => (
    <Content className={classes.content}>
        <p>Learn React JS Basies</p>
        <ul className={classes.icon}>
            <li>
                <input type="checkbox" />
            </li>
            <li className={classes.pen}>
                <i className="fas fa-pen" />
            </li>
            <li className={classes.delete}>
                <i className="fas fa-trash" />
            </li>
        </ul>
    </Content>
);

export default DynamicContent;
