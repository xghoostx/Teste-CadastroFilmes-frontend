import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import axios from '../../../services/api';





export default class Search extends Component {
    state = {
        filmes: []
    }
    componentDidMount() {
        this.loadFilmes();
    }

    loadFilmes = async () => {
        const response = await axios.get('filmes');

        this.setState({ filmes: response.data });

    }

    
    handleDelete = async (id) =>{
        await axios.delete(`/filmes/${id}`);

        this.setState({filmes: this.state.filmes.filter(item => item.id === id)})

    }

    render() {
        return (
            <div className="filmes-list">
                <Container>
                    <ul className="list">
                        {this.state.filmes.map(filme =>
                            <li key={filme._id}>
                                <h2>{filme.nome}</h2>
                                <p > {filme.descricao}</p>
                                <Button 
                                onClick={this.handleDelete}
                                type="submit" className="btn-list"> Editar </Button>
                                <Button type="submit" className="btn-list"> Excluir </Button>
                            </li>
                        )}
                    </ul>
                </Container>
            </div >
        );
    }
}