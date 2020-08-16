import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateTodo extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/todo/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteTodo extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the Todo ${this.props.id} permanently?`,
            )
        ) {
            api.deleteTodolistById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todolist: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllTodolist().then(todolist => {
            this.setState({
                todolist: todolist,
                isLoading: false,
            })
        })
    }

    render() {
      const { todolist, isLoading } = this.state
      console.log('TCL: TodoList -> render -> todolist', todolist)

      const columns = [
          {
              Header: 'ID',
              accessor: '_id',
              filterable: true,
          },
          {
              Header: 'Name',
              accessor: 'name',
              filterable: true,
          },
          {
              Header: 'Done',
              accessor: 'done',
              filterable: true,
          },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteTodo id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateTodo id={props.original._id} />
                        </span>
                    )
                },
            },
      ]

      let showTable = true
      if (!todolist.length) {
          showTable = false
      }

      return (
          <Wrapper>
              {showTable && (
                  <ReactTable
                      data={todolist}
                      columns={columns}
                      loading={isLoading}
                      defaultPageSize={10}
                      showPageSizeOptions={true}
                      minRows={0}
                  />
              )}
          </Wrapper>
      )
    }
}

export default TodoList
