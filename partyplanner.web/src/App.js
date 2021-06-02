import './App.css';

import { useState, useEffect } from 'react';

import PartyInfo from './components/party-info/PartyInfo';
import CategoryList from './components/category/CategoryList';
import GuestList from './components/guest/GuestList';

import getParty from './services/PartyService';
import EnterPartyId from './components/enter-party-id/EnterPartyId';

function App() {
    const [party, setParty] = useState();

    useEffect(() => {
        getParty('5774d5f9-2bae-4bdc-b063-568c0ceb710b').then(
            p => {
                setParty(p);
            },
            e => console.log(e)
        );
    },
        []);

    return (
        <div className="App">
            <h1>PartyPlanner</h1>
            {party && <PartyInfo partyInfo={party.info} />}
            {party && <CategoryList categories={party.categories} />}
            {party && <GuestList guests={party.guests} />}
        </div>
    );
}

export default App;
