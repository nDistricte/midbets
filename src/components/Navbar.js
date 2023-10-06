import React, { Component } from 'react'

export default class Navbar extends Component {

  constructor(probs){
    super(probs);
    this.state= {
      isSearchClicked: false,
    };
  }

  handleSearchClick = () => {
    this.setState((prevState) => ({
      isSearchClicked: !prevState.isSearchClicked,
    }));
  };

  render() {
    const {isSearchClicked} = this.state;
    return (
      <div className='p-6'>
        <nav className='flex justify-between items-center mx-auto text-white'>
        <a href='/home' className='text-left font-bold text-xl'>Midbets</a>
          <ul className='text-center space-x-4 inline-flex'>
            <li><a href='/home'>Home</a></li>

            <li><a href='/search' onClick={this.handleSearchClick}>
            Search
            </a>
            </li>
            <li><textarea className='' placeholder='Enter username' rows='1'/></li>
            <li><a href='/AboutUs'>About us</a></li>
            <li><a href='/Help'>Help</a></li>
          </ul>
          <a href='/login' className='text-right'>Login</a>
        </nav>
      </div>
    )
  }
}
