import React from 'react'
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
}
// https://stackoverflow.com/questions/58630750/react-typescript-component-with-two-different-prop-interfaces
const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()} 
        </ul>
    )
}

export default List
