import './App.css';

import { useState } from 'react';

import CreateParty from './components/create-party/CreateParty';
import EnterPartyId from './components/enter-party-id/EnterPartyId';
import PartyInfo from './components/party-info/PartyInfo';
import CategoryList from './components/category/CategoryList';
import GuestList from './components/guest/GuestList';

import { getParty, createParty, createCategory, updatePartyInfo } from './services/PartyService';

function App() {
    const [party, setParty] = useState();

    const setPartyId = async (partyId) => {
        const _party = await getParty(partyId);

        if (_party) {
            setParty(_party);
        }
    };

    const createNewParty = async (name) => {
        const _party = await createParty(name);

        if (_party) {
            setParty(_party);
        }
    }

    const onCategoryCreated = async (category) => {
        const success = await createCategory(party.id, category);

        if (success) {
            setParty(await getParty(party.id));
        }
    };

    const onUpdatePartyInfo = async (partyInfo) => {
        const success = await updatePartyInfo(party.id, partyInfo);

        if (success) {
            setParty(await getParty(party.id));
        }
    };


    return (
        <div className="App">
            <h1>PartyPlanner</h1>
            {!party && <EnterPartyId onPartyIdSet={setPartyId} />}
            {!party && <CreateParty onCreateNewParty={createNewParty} />}
            {party && <button onClick={() => setParty(null)}>Reset partyId</button>}
            {party && <PartyInfo partyInfo={party.info} id={party.id} onUpdatePartyInfo={onUpdatePartyInfo} />}
            {party && <CategoryList categories={party.categories} onCategoryCreated={onCategoryCreated} />}
            {party && <GuestList guests={party.guests} />}
        </div>
    );
}

export default App;
