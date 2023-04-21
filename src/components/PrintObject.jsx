import React,{useState} from 'react';

const PrintObject = () => {
    const [persons,setPersons] = useState([
        {id:1,name:"bharath",gender:"male"},
        {id:2,name:"sowmya",gender:"female"},
        {id:3,name:"raju",gender:"male"},
        {id:4,name:"roja",gender:"female"}
    ]);
      const clickDelete = (id) => {
        setPersons(oldValues => {
            return oldValues.filter(person => person.id !=id)
        })
      }
    return (
        <>
         <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                persons.map((person,index) => {
                                    return(
                                    <tr className='card-body'key={person.id}>
                                        <td>{person.id}</td>
                                        <td>{person.name}</td>
                                        <td>{person.gender}</td>
                                        <td><button onClick={() => clickDelete(person.id)}>Delete</button></td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
        </>
    )
};
export default PrintObject;