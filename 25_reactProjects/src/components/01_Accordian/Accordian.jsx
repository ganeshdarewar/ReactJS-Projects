// import { useState } from "react"
// import data from './data'
// // single selection
// export default function Accordian(){
//     const [selected, setSelected]= useState(null)
//     function handleSingleSelection(getCurrentId){
//         setSelected(selected === getCurrentId? null : getCurrentId)
//     }
//     return(
//         <div className="wrapper p-5 mx-auto overflow-hidden">
//             <div className="accordian">
//                 {
//                     data && data.length<0 ?
//                     <div>No data found</div> :
//                     data.map(({id, question, answer}) => (
//                         <div className="item bg-slate-200" id={id}>
//                             <div className="title m-5 flex justify-between cursor-pointer"
//                             onClick={()=> handleSingleSelection(id)}
//                             >
//                                 <h3>{question}</h3>
//                                 <span>+</span>
//                             </div>
//                             {
//                                 selected === id  ? <div className="bg-orange-200">{answer}</div>  : null
//                             }
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// multiselection

import React, { useState } from "react";
import data from "./data";
const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getId) {
        setSelected(getId === selected ? null : getId)
    }
    function handleMultiSelection(getID) {
        let copyMultiple = [...multiple]
        let findIndexOfCurrentId = copyMultiple.indexOf(getID)
        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getID)
        }
        else {
            copyMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(copyMultiple)
    }

    return (
        <div className="wrapper p-5 mx-auto overflow-hidden flex flex-col justify-center items-center">
            <button className="bg-orange-600 p-2 rounded"
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            >Enable Multiselection</button>
            <h1>
                multiple selection is
                {
                    enableMultiSelection ? ' on' : "off"
                }
            </h1>
            <div className=" h-full w-full">
                {
                    data && data.length < 0 ? <div>no data found</div> :
                        data.map(({ id, question, answer }) => (
                            <div className="item bg-slate-200 " id={id}>
                                <div className="title m-5 flex justify-between cursor-pointer"
                                    onClick={
                                        enableMultiSelection ?
                                            () => handleMultiSelection(id) :
                                            () => handleSingleSelection(id)}
                                >
                                    <h3>
                                        {question}
                                    </h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection ?
                                        multiple.indexOf(id) !== -1 ? <div className="bg-orange-200">{answer}</div> : null :
                                        selected === id ? <div className="bg-orange-200">{answer}</div> : null
                                }
                            </div>
                        ))
                }

            </div>
        </div>
    );
};

export default Accordian;
