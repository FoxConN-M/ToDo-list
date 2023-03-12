import React from "react";
import styled from 'styled-components';


  const List = styled.section `
  background: #202926;
  padding: 20px;
  height: 100vh;

  button{
    background-color: #C4357A;
    height: 40px;
    color: #fafafa;
    border: none;
    padding: 10px;
    margin-top: 15px;
    cursor: pointer;
    font-weight: 800;
  }

  h1{
    color: #FAFAFA;
    margin-bottom: 20px;
    margin-right: 30px;
    font-family: 'Work Sans', sans-serif;
  }

  input {
    height: 40px;
    margin-top: 15px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    width: 300px;
  }

  ol li {
    color: #FAFAFA;    
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
  }
  `;

  const Deletar = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 30px;
  `;


// To Do
export default class App extends React.Component {
  state = {
    tarefa: "",
    lista: [],
  };

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    });
  };

  addTarefa = () => {
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa
      }),
      // Apagando o input depois que envia
      tarefa: ""
    });
  };

  delete = (index) => {
    this.setState({
      lista: this.state.lista.filter((item, i) => i !== index),
    });
  };


  render() {
    return (
      <>
        <List>
          <h1>ToDo List</h1>
          <input value={this.state.tarefa} onChange={this.handleChange}/>
          <button onClick={this.addTarefa}>ADICIONAR TAREFA</button>
          <ol>
            {this.state.lista.map((item, index) => (
              <li>
                {item.tarefa}
                <Deletar onClick={() => this.delete(index)}>x</Deletar>
              </li>
            ))}
          </ol>
        </List>
      </>
    );
  }
}