type moveSchema = {
    name:String,
    id: String,
    pow: String,
    accuracy: String,
    type: String,
    description: String,
    pp: String
}

type monSchema = {
    name: '',
    ability: '',
    moves: moveSchema[],
}

type teamSchema = {
    name:String,
    team:monSchema[]
}

function generateMoves():moveSchema{
    return;
}

import { writable } from 'svelte/store';

type lsObject = {
    identifier:string,
    ifNull:Object
}

export default function localStorageStore(init:lsObject) {
    if (typeof init !== "object") {
        throw 'Object not provided'
    }
    
    let identifier = init['identifier'];

    if (!localStorage[identifier]) {
        localStorage.setItem(identifier, JSON.stringify(init['ifNull']));
    }
        

    const { subscribe, set, update } = writable(JSON.parse(localStorage[identifier]));
    

    return { identifier,subscribe, set, update }

}