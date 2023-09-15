
import React from "react";
class InputEvent extends React.Component {
    state = {
        fname: '',
        lname: '',
    }
    handleChangeFname = (even) => {
        this.setState({
            fname: even.target.value
        })
    }
    render() {
        return (
            <>
                <form>
                    <label for="fname">First name:</label><br />
                    <input type="text" value={this.state.fname}
                        onChange={(even) => this.handleChangeFname(even)} /><br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" value={this.state.lname} /><br />
                </form>
            </>
        )
    }

}
export default InputEvent;
