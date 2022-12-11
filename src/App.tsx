import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Portofolio from './pages/portofolio/Portofolio';
import Aboutme from './pages/Aboutme/Aboutme';
import QuizApp from './Components/Quizapp/QuizPage/QuizApp';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import IntervalPage from './Components/Interval/IntervalPage';
import TodoListPage from './Components/TodoList/TodolistPage/TodoListPage';
import SlotMachine from './Components/Slots/SlotPage/Slotmachine';
import Jokes from './Components/LocalStorage/Jokes';
import Pokedex from './Components/Pokemon/Pokemon';
import ColorPicker from './Components/ColorPicker/ColorPicker';

const App = () => {
  return (
    <div className="App">
      <Router>
					<Routes>
						<Route path='/' element={<Home />} />
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
    </Router>
    </div>
  );
}

export default App;
