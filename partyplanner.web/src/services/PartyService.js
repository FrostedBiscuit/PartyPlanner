import { ROUTES } from "../core/Consts"

const getParty = async (partyId) => {
    const response = await fetch(ROUTES.GET_PARTY.replace("{pid}", partyId));
    if (response.ok) {
        var party = await response.json();
        return party;
    }
};

const createParty = async (partyName) => {
    const response = await fetch(ROUTES.CREATE_PARTY.replace("{pname}", partyName), {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
};

const createCategory = async (partyId, category) => {
    const response = await fetch(ROUTES.CREATE_CATEGORY.replace("{pid}", partyId), {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    });
    return response.ok;
};

const updatePartyInfo = async (partyId, partyInfo) => {
    const response = await fetch(ROUTES.UPDATE_PARTYINFO.replace("{pid}", partyId), {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(partyInfo)
    })

    return response.ok;
};

export { getParty, createParty, createCategory, updatePartyInfo };