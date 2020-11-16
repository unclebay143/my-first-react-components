import React from 'react'

function MapDetails ({bestFriends}) {
  const bestFriendComponent = bestFriends.map((bestFriend, index)=> {
    const {name, age, profession} = bestFriend;
    return (
      <tr key={index} className="mb-4">
        <td className="list-group-item"><h5>Name</h5> {name.toUpperCase()}</td>
        <td className="list-group-item"><h5>Age</h5> {age}</td>
        <td className="list-group-item"><h5>Profession</h5> {profession}</td>
      </tr>
    )
  });
    return (
      <table className="card card-body">
        <tbody className="list-group">{bestFriendComponent}</tbody>
      </table>
    )
  }

export default  MapDetails;