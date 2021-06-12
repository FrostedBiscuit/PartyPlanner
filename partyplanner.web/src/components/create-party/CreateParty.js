import { useState } from 'react';

const CreateParty = ({ onCreateNewParty }) => {
    const [partyName, setPartyName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (partyName.length === 0) {
            alert('Cannot create party with empty name!');
            return;
        }

        onCreateNewParty(partyName);
        setPartyName('');
    }
    
    return (
        <div className='component'>
            <form onSubmit={onSubmit}>
                <h2>Enter Party name:</h2>
                <input type='text' name='partyName' onChange={(e) => setPartyName(e.target.value)} value={partyName} placeholder='Party name' id='partyName' />
                <br />
                <br />
                <input type='submit' value='Create' />
            </form>
        </div>
    );
}

export default CreateParty;