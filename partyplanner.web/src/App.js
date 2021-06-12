import './App.css';

import { useState } from 'react';

import CreateParty from './components/create-party/CreateParty';
import EnterPartyId from './components/enter-party-id/EnterPartyId';
import PartyInfo from './components/party-info/PartyInfo';
import CategoryList from './components/category/CategoryList';
import GuestList from './components/guest/GuestList';

import { getParty, createParty, createCategory, updatePartyInfo, deleteCategory, updateCategory, createGuest, deleteGuest } from './services/PartyService';

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

    const onCategoryDeleted = async (categoryId) => {
        const success = await deleteCategory(party.id, categoryId);

        if (success) {
            setParty(await getParty(party.id));
        }
    };

    const onCategoryUpdate = async (category) => {
        for (let i = 0; i < category.items.length; i++) {
            category.items[i].itemId = i;
        }

        const success = await updateCategory(party.id, category);

        if (success) {
            setParty(await getParty(party.id));
        }
    };

    const onGuestCreated = async (guest) => {
        const success = await createGuest(party.id, guest);

        if (success) {
            setParty(await getParty(party.id));
        }
    };

    const onGuestDeleted = async (guestId) => {
        const success = await deleteGuest(party.id, guestId);

        if (success) {
            setParty(await getParty(party.id));
        }
    }

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
            {party && <CategoryList categories={party.categories} onCategoryCreated={onCategoryCreated} onCategoryDeleted={onCategoryDeleted} onCategoryUpdated={onCategoryUpdate} />}
            {party && <GuestList guests={party.guests} onGuestCreated={onGuestCreated} onGuestDeleted={onGuestDeleted} />}
        </div>
    );
}

export default App;
