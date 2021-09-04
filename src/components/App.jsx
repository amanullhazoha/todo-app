import React, { Component } from 'react';
import './css/global.css';
import TODOS from './Data/data';
import ButtonGroups from './Layout/ButtonGroups';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Layout from './Layout/Layout';
import MainContent from './Layout/MainContent';

class App extends Component {
    state = {
        todos: [],
        editTodo: { edit: false, todo: null },
        searchValue: 'all',
    };

    componentDidMount() {
        this.setState({
            todos: TODOS,
        });
    }

    addNew = (newTodo) => {
        const { todos } = this.state;
        const add = newTodo;
        add.id = new Date().toLocaleTimeString();
        add.isSelect = false;
        const addTodo = [add, ...todos];
        this.setState({
            todos: addTodo,
        });
    };

    handelSearch = (value) => {
        this.setState({
            searchValue: value,
        });
    };

    handelChange = (id) => {
        const { todos } = this.state;
        const selectTodo = todos.find((todo) => todo.id === id);
        selectTodo.isSelect = !selectTodo.isSelect;
        const findIndex = todos.findIndex((tod) => tod.id === id);
        todos.splice(findIndex, 1, selectTodo);
        this.setState({
            todos,
        });
    };

    handelclick = (id) => {
        const { todos } = this.state;
        const updateTodo = todos.filter((todo) => todo.id !== id);
        this.setState({
            todos: updateTodo,
        });
    };

    handelEdit = (id) => {
        const { todos, editTodo } = this.state;
        const updateTodo = todos.find((todo) => todo.id === id);
        updateTodo.edit = !editTodo.edit;
        this.setState({
            editTodo: updateTodo,
        });
    };

    edited = (value) => {
        const { todos } = this.state;
        const updateTodo = [...todos];
        const update = updateTodo.find((todo) => todo.id === value.id);
        update.title = value.title;
        update.isSelect = value.isSelect;
        this.setState({
            todos: updateTodo,
            editTodo: {
                edit: false,
                todo: null,
            },
        });
    };

    deleteDone = () => {
        const { todos } = this.state;
        const deleteDone = todos.filter((todo) => !todo.isSelect === true);
        this.setState({
            todos: deleteDone,
        });
    };

    deleteAll = () => {
        this.setState({
            todos: [],
        });
    };

    searchFileter = () => {
        const { searchValue, todos } = this.state;
        if (searchValue === 'done') {
            return todos.filter((todo) => todo.isSelect === true);
        }
        if (searchValue === 'todo') {
            return todos.filter((todo) => todo.isSelect === false);
        }
        return todos;
    };

    Perfom = () => {
        const { editTodo } = this.state;
        const todos = this.searchFileter();
        return (
            <MainContent
                todo={todos}
                edit={editTodo.edit}
                handelChange={this.handelChange}
                handelclick={this.handelclick}
                handelEdit={this.handelEdit}
            />
        );
    };

    render() {
        const { editTodo } = this.state;
        return (
            <Layout>
                <Header addNew={editTodo.edit ? this.edited : this.addNew} editTodo={editTodo} />

                <ButtonGroups handelSearch={this.handelSearch} />

                {this.Perfom()}

                <Footer deleteAll={this.deleteAll} deleteDone={this.deleteDone} />
            </Layout>
        );
    }
}

export default App;
