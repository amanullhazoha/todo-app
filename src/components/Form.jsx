import React, { Component } from 'react';
import Button from './Button';
import form from './css/form.module.css';

class Form extends Component {
    state = {
        title: '',
    };

    componentDidUpdate(prevProps) {
        const { editTodo } = this.props;
        if (editTodo.edit === true && prevProps.editTodo.edit === false) {
            this.stateUpdate();
        }
    }

    stateUpdate = () => {
        const { editTodo } = this.props;
        this.setState({
            title: editTodo.title,
        });
    };

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handelSubmit = (e) => {
        const { title } = this.state;
        const { addNew, editTodo } = this.props;
        e.preventDefault();
        if (title.length > 10) {
            const todo = {
                title,
            };
            if (editTodo.edit) {
                todo.isSelect = editTodo.isSelect;
                todo.id = editTodo.id;
                addNew(todo);
            } else {
                addNew(this.state);
            }

            this.setState({
                title: '',
            });
        } else {
            alert('Please write some text');
        }
    };

    render() {
        const { title } = this.state;
        const { editTodo } = this.props;

        return (
            <form onSubmit={this.handelSubmit}>
                <div className={form.input}>
                    <div className={form.icon}>
                        <i className="fas fa-book" />
                    </div>

                    <input
                        type="text"
                        placeholder="New Todo"
                        name="title"
                        value={title}
                        onChange={this.handelChange}
                    />
                </div>
                <Button
                    type="submit"
                    className={form.addNew}
                    text={editTodo.edit ? 'Update Task' : 'Add New Task'}
                />
            </form>
        );
    }
}

export default Form;
