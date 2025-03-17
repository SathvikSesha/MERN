import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/about';
import Counter from './component/counter';
import EvenOdd from './component/EvenOdd';

function App() {
    const hero = { name: "Iron Man", suit: "Mark 85", power: "Arc Reactor" };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home hero={hero} />} />
                <Route path='/about' element={<About />} />
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/EvenOdd' element={<EvenOdd/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
