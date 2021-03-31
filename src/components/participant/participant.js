import React, {useState}  from 'react';
import './participant.css';

export const Participant = (props) => {

    const [obj, setObj] = useState({text : '', byName : false, byScore : true, byRapidFire : false})
    const onFormChange = ({value , name})=>{setObj({...obj, [name] : value})}

    const capitalize = (string) =>{return string.charAt(0).toUpperCase() + string.slice(1)}

    let array = props.table.filter(el => el.name.includes(`${capitalize(obj.text)}`))


    if(obj.byName){
        array.sort(function (a, b) {
            if (a.name < b.name) {
            return -1;
            }
            if (b.name < a.name) {
            return 1;
            }
            return 0;          
            })}
    else if (obj.byRapidFire){
        array.sort(function (a, b) {
            if (a.rapidFire > b.rapidFire) {
               return -1;
               }
           if (b.rapidFire < a.rapidFire) {
               return 1;
               }
               return 0;          
            })}
    else {array.sort(function (a, b) {
        if (a.score < b.score) {
           return -1;
           }
       if (b.score < a.score) {
           return 1;
           }
           return 0;          
        })}

     const participantList = array.map(e => {
        return (
        <div className = 'participant' key = {e.id}>
            <div className = 'short'>{e.id}</div>
            <img src = {e.avatar} className = 'avatar' />
            <div className = 'long'> {e.name} {e.Surname}</div>
            <div className = 'short'> {e.Score}</div>
            <div className = 'short'>{e.rapidFire}</div>
        </div>
        )})

        
const filterByName = () =>{setObj({...obj, byName : true, byScore : false, byRapidFire : false})}

 const filterByScore = () => {setObj({...obj, byName : false, byScore : true, byRapidFire : false})}

 const filterByRapidFire = () => {setObj({...obj, byName : false, byScore : false, byRapidFire : true})}

    return(
        <div>
            <div className = 'search'>
            <span className = 'text'>Filter by: </span>
            <div className = 'box'><span>name  </span><input className = 'filter' type = 'checkbox' checked = {obj.byName} onChange = {filterByName}  ></input> </div>
            <div className = 'box'><span>score</span><input className = 'filter' type = 'checkbox' checked = {obj.byScore}  onChange = {() => {filterByScore(array)}}></input></div>
            <div className = 'box'><span>rapid-fire </span><input className = 'filter' type = 'checkbox' checked = {obj.byRapidFire}  onChange = {() => {filterByRapidFire(array)}} ></input></div>
            <input  type="text" placeholder="search" onChange ={(event) => onFormChange(event.target)} value = {obj.text} name='text'></input>
            </div>
            <div className = 'participant'>
                <div className = 'short'>#</div>
                <div className = 'full-participant'> PARTICIPANTS</div>
                <div className = 'short'> score </div>
                <div className = 'short'> rapid </div>
            </div>
            {participantList}
        </div>
    )
}
