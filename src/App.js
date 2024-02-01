import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isShowModal: false,
            routing: 'products'

        };
    }
    fetchData = (navItem) => {
        // console.log(navItem)
        fetch(`https://fakestoreapi.com/${navItem}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json,
                    routing: navItem
                });
            });
    };
    handleShowModal= () => {
        this.setState({
            isShowModal:true,

        })
        console.log(this.state)
    }
    handleOnShowModal= () => {
        this.setState({
            isShowModal:false,

        })

    }
    componentDidMount() {
        this.fetchData("products");
    }
     showLogin= () =>{
        this.setState({
            routing: 'login'

        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="flex flex-col h-screen justify-between">
                <Header onLoginClick={this.showLogin} onUserClick={this.fetchData} />
                <Display routeState={this.state.routing} data={this.state.data} />
                <Footer />
                {this.state.isShowModal ?  <Modal handleOnShowModal={this.handleOnShowModal} /> : <></>}
                <button onClick={this.handleShowModal} className="fixed items-center right-2 top-3 ">
                    <svg width="25" height="25" viewBox="0 0 40 40" fill="none" >
                        <path
                            d="M22 10H18V18H10V22H18V30H22V22H30V18H22V10ZM20 0C8.97 0 0 8.97 0 20C0 31.03 8.97 40 20 40C31.03 40 40 31.03 40 20C40 8.97 31.03 0 20 0ZM20 36C11.18 36 4 28.82 4 20C4 11.18 11.18 4 20 4C28.82 4 36 11.18 36 20C36 28.82 28.82 36 20 36Z"
                            fill="green"/>
                    </svg>
                </button>
            </div>
        );
    }
}

export default App;