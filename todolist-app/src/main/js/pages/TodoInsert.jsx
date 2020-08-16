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

class TodoInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

    handleIncludeTodo = async () => {
        const { name, done } = this.state
        const payload = { name, done }

        await api.insertTodolist(payload).then(res => {
            window.alert(`Todo inserted successfully`)
            this.setState({
                name: '',
                done: false,
            })
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

                <Button onClick={this.handleIncludeTodo}>Add Todo</Button>
                <CancelButton href={'/todo/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TodoInsert
