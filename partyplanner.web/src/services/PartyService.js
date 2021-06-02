import { ROUTES } from "../core/Consts"

const getParty = async (partyId) => {
    var response = await fetch(ROUTES.GET_PARTY.replace("{pid}", partyId));
    if (response.ok) {
        var party = await response.json();
        return party;
    }
}

export default getParty;