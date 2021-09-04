import classes from '../css/mainContent.module.css';
import DynamicContent from '../DynamicContent';

const MainContent = () => (
    <main className={classes.mainSection}>
        <DynamicContent />
    </main>
);

export default MainContent;
