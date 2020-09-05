import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class TodoUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            done: false,
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputDone = async event => {
        const done = event.target.value
        this.setState({ done })
    }

    handleUpdateDone = async () => {
        const { id, name, done } = this.state
        const payload = { name, done }

        await api.updateTodolistById(id, payload).then(res => {
            window.alert(`Todo updated successfully`)
            this.setState({
                name: '',
                done: false,
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const todo = await api.getTodolistById(id)

        this.setState({
            name: todo.name,
            done: todo.done,
        })
    }

    render() {
        const { name, done } = this.state
        return (
            <Wrapper>
                <Title>Create Todo</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Done: </Label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={this.handleChangeInputDone}
                />

                <Button onClick={this.handleUpdateDone}>Update Todo</Button>
                <CancelButton href={'/todo/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TodoUpdate
