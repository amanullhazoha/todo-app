import classes from '../css/mainContent.module.css';
import DynamicContent from '../DynamicContent';

const MainContent = ({ todo, handelclick, handelChange, handelEdit, edit }) => (
    <main className={classes.mainSection}>
        <DynamicContent
            todo={todo}
            handelChange={handelChange}
            handelclick={handelclick}
            handelEdit={handelEdit}
            edit={edit}
        />
    </main>
);

export default MainContent;
