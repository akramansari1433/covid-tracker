import React from 'react'

function StatePicker({states,handleStateChange}) {
    return (
        <div className="tc mv5">
            <label className="f4 b white">Choose State : </label>
            <select className="w5 mw5 h2 mh2" defaultValue="Total" onChange={(e)=>handleStateChange(e.target.value)}>
                {states.map((state,i)=><option key={i} value={state}>{state}</option>)}
            </select>
        </div>
    )
}

export default StatePicker
