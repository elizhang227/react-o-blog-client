import React, { Component } from 'react';

class AddPost extends Component {
    state = {
        title: '',
        content: ''
    }

    handleAddTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    
    handleAddContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = async (title) => {
        console.log('this is working')
        const url = 'http://localhost:3000/v1/post/add';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(title)
        })
        const data = await response.json();
        console.log('this is data', data)
        return data;
    }

    render() {
        const { title, content } = this.state;
        console.log('this is title', title)
        return (
            <>
                <input onChange={e => this.handleAddTitle(e)} placeholder='title'></input>
                <button onClick={() => this.handleSubmit(title)}>submit</button>
                <input onChange={e => this.handleAddContent(e)}placeholder='content'></input>
                <button>submit</button>
            </>
        )
    }
}

export default AddPost;