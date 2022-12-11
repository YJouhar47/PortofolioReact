import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Aboutme from './pages/Aboutme/Aboutme';
import Contact from './pages/contact/Contact';
import QuizApp from './Components/Quizapp/QuizPage/QuizApp';
import Portofolio from './pages/portofolio/Portofolio';
import Pokedex from './Components/Pokemon/Pokemon';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import IntervalPage from './Components/Interval/IntervalPage';
import TodoListPage from './Components/TodoList/TodolistPage/TodoListPage';
import SlotMachine from './Components/Slots/SlotPage/Slotmachine';
import Jokes from './Components/LocalStorage/Jokes';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import Home from './pages/home/Home';
const App = () => {
  return (
    <div>
      <Router>
        <header>
        <Navbar></Navbar>
        </header>
        <body>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/aboutme' element={<Aboutme></Aboutme>}/>
						<Route path='/contact' element={<Contact />} />
						<Route path='/portofolio' element={<Portofolio />} />
            <Route path='/quizapp' element={<QuizApp/>}/>
            <Route path='/pokemon' element={<Pokedex/>}/>
            <Route path='/shoppinglist' element={<ShoppingList/>}/>
            <Route path='/interval' element={<IntervalPage/>}/>
            <Route path='/todo' element={<TodoListPage/>}/>
            <Route path='/slots' element={<SlotMachine aantalSlots={3}/>}/>
            <Route path='/jokes' element={<Jokes/>}/>
            <Route path='/colorpicker' element={<ColorPicker/>}/>
          </Routes>
        </body>
        <footer>
          <Footer></Footer>
        </footer>
      </Router>
    </div>

  );
}

export default App;
