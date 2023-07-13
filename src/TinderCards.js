import React, {useEffect, useState} from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
        // if you have any kind of async funciton inside useEffect hook this is how you need to do it 
    }, [])
    // coming from a class component background it's just like the componentDidMount function
    // it runs once when the component is mounted and again whenevr the variable inside the square brackets changes, that is if that square bracket has somehing in it. ( example if it has the "name" variable in it then it will fire this useEffect hook again whenever the name variable changes)

    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map((person) => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up','down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen = {() => outOfFrame(person.name)}
                >
                    <div className='card' style={{ backgroundImage: `url(${person.imgUrl})`}} >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  );
}

export default TinderCards;