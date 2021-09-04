import Content from '../Content';
import header from '../css/header.module.css';
import Form from '../Form';

const Header = () => (
    <section className={header.header}>
        <h1>Todo Input</h1>
        <Content>
            <Form />
        </Content>
    </section>
);

export default Header;
