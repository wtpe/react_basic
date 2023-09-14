import React from "react";

class Test extends React.Component {
    state = {
        name: 'thanh',
        channel: 'youtube'
    }
    handleOnChangeName = (even) => {
        this.setState({
            name: even.target.value
        })
    }
    render() {
        return (
            <>

                <div>Hello cac ban</div>
                <div className="first">
                    My name is {(this.state.name)}
                </div>
                <div>
                    <input value={this.state.name} type="text"
                        onChange={(even) => this.handleOnChangeName(even)}>

                    </input>
                </div>
                <div >

                </div>
                <div className="click">
                    <button onClick={console.log}></button>
                </div>
            </>
        );
    }
}

export default Test;