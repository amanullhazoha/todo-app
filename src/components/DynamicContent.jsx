/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Content from './Content';
import classes from './css/dynamicContent.module.css';

const DynamicContent = ({ todo, handelclick, handelEdit, handelChange }) =>
    todo.map((tod) => (
        <Content className={classes.content} key={tod.id}>
            <p>{tod.title}</p>
            <ul className={classes.icon}>
                <li>
                    <input
                        type="checkbox"
                        checked={tod.isSelect}
                        onChange={() => handelChange(tod.id)}
                    />
                </li>
                <li className={classes.pen} onClick={() => handelEdit(tod.id)}>
                    <i className="fas fa-pen" />
                </li>
                <li className={classes.delete} onClick={() => handelclick(tod.id)}>
                    <i className="fas fa-trash" />
                </li>
            </ul>
        </Content>
    ));

export default DynamicContent;
