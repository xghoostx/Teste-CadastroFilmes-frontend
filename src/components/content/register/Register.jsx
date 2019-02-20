import React, { Component } from 'react'
import axios from '../../../services/api';
import Main from '../../template/main/Main';


const baseUrl = 'http://localhost:3333/filmes'
const initialState = {
    filme: { nome: '', descricao: '', url: '' },
    lista: []
}

const headerProps = {
    icon: 'film',
    title: 'Cadastro',
    subtitle: 'Cadastro de Filmes: Incluir, Listar, Alterar e Excluir!'
}

export default class UserCrud extends Component {

    state = { ...initialState };

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ lista: resp.data });
        });
    }

    clear() {
        this.setState({ filme: initialState.filme });
    }

    save() {
        const filme = this.state.filme;
        const method = filme.id ? 'put' : 'post';
        const url = filme.id ? `${baseUrl}/${filme.id}` : baseUrl;
        axios[method](url, filme)
            .then(resp => {
                const lista = this.getUpdatedList(resp.data);
                this.setState({ filme: initialState.filme, lista });
            });
    }

    getUpdatedList(filme, add = true) {
        const lista = this.state.lista.filter(u => u.id !== filme.id);
        if (add) lista.unshift(filme);
        return lista;
    }

    updateField(event) {
        const filme = { ...this.state.filme };
        filme[event.target.name] = event.target.value;
        this.setState({ filme });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="nome"
                                value={this.state.filme.nome}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>Descrição</label>
                            <textarea type="textarea" className="form-control"
                                name="descricao"
                                value={this.state.filme.descricao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a descrição..." />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>url</label>
                            <input type="text" className="form-control"
                                name="url"
                                value={this.state.filme.url}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a url..." />
                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary"
                                onClick={e => this.save(e)}>
                                Salvar
                        </button>

                            <button className="btn btn-secondary ml-2"
                                onClick={e => this.clear(e)}>
                                Cancelar
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    load(filme) {
        this.setState({ filme });
    }

    remove(filme) {
        axios.delete(`${baseUrl}/${filme.id}`).then(resp => {
            const lista = this.getUpdatedList(filme, false);
            this.setState({ lista });
        });
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Url</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }

    renderRows() {
        return this.state.lista.map(filme => {
            return (
                <tr key={filme.id}>
                    <td>{filme.nome}</td>
                    <td>{filme.descricao}</td>
                    <td><a href={`${filme.url}`} target="blank"> {filme.url}</a></td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(filme)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(filme)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Main {...headerProps}>
                <div>
                    {this.renderForm()}
                    {this.renderTable()}
                </div>
            </Main>    
        );
    }
}