import { useState } from "react";

const useInput = (value) => {
    const [partyId, setPartyId] = useState(value);
    const onChange = (event) => {
        setPartyId(event.target.value);
    };
    
    return {partyId, onChange};
};

const EnterPartyId = ({onPartyIdSet}) => {
    const inputProps = useInput();

    return (
        <div className='component'>
            <h2>Enter party ID:</h2>
            <input onChange={inputProps.onChange} placeholder='Party ID' />
            <br/>
            <br/>
            <button onClick={() => onPartyIdSet(inputProps.partyId)}>Submit</button>
        </div>
    );
};

EnterPartyId.defaultProps = {
    onPartyIdSet: (pid) => console.log("This is the default function. ", pid)
};

export default EnterPartyId;