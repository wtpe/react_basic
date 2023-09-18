import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDeFault()
        console.log('>>> check data input: ', this.state)
    }

    render() {
        return (
            <form>
                <label >Title</label>
            </form>
        )
    }
}