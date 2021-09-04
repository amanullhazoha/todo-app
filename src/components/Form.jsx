import Button from './Button';
import form from './css/form.module.css';

const Form = () => (
    <form>
        <div className={form.input}>
            <div className={form.icon}>
                <i className="fas fa-book" />
            </div>

            <input type="text" placeholder="New Todo" />
        </div>
        <Button type="submit" className={form.addNew} text="Add New Task" />
    </form>
);

export default Form;
