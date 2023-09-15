
import React from "react";
class Condition extends React.Component {
    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional:', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <h1>Hello World</h1>
                        <div><button onClick={() => this.handleShowHide()}> Hide </button></div>
                    </>

                }
            </>
        )
    }
}
export default Condition;