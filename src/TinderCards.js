import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://media.wired.com/photos/649c76576279e36472844646/master/w_2560%2Cc_limit/Elon-Musk-Vivatech-Business-1499013102.jpg'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg'
        }
    ])

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
                    <div className='card' style={{ backgroundImage: `url(${person.url})`}} >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  );
}

export default TinderCards;