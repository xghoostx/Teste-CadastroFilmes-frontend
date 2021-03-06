import React, { Component } from 'react'
import axios from '../../../services/api';
import Main from '../../template/main/Main';
import './Register.css';


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

                <div class="row">
                    <div class="col-sm">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="nome"
                                value={this.state.filme.nome}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="form-group">
                            <label>Descrição</label>
                            <textarea type="textarea" className="form-control"
                                name="descricao"
                                value={this.state.filme.descricao}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a descrição..." />
                        </div>
                    </div>
                    <div class="col-sm">
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
                </div >
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn test"
                            onClick={e => this.save(e)}>
                            Salvar
                            </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div >
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

    renderList() {
        return this.state.lista.map(filme => {
            return (
                <div className="container-fluid">
                    <table class="table table-bordered mt-4 ">
                        <tbody>
                            <tr key={filme.id}>
                                <th> Nome: </th>
                                <td> {filme.nome} </td>
                            </tr>
                            <tr key={filme.id}>
                                <th> Descrição: </th>
                                <td> {filme.descricao} </td>
                            </tr>
                            <tr key={filme.id}>
                                <th> Url: </th>
                                <td> <a href={`${filme.url}`} target="blank"> {filme.url}</a> </td>
                            </tr>
                            <tr key={filme.id}>
                                <th> <img src={`${filme.url}`} alt="capa" id="img"/> </th>
                                <td>
                                    <div className="col-12 d-flex justify-content-end">
                                        <button className="btn btn-warning"
                                            onClick={() => this.load(filme)}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button className="btn btn-danger ml-2"
                                            onClick={() => this.remove(filme)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        });
    }

    render() {
        return (
            <Main {...headerProps}>
                <div>
                    {this.renderForm()}
                    {this.renderList()}
                </div>
            </Main >
        );
    }
}