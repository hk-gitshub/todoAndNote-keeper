//Actions Constants

export const ADD_NOTE="ADD_NOTE";
export const DELETE_NOTE="DELETE_NOTE";

//Action creators

export const addNote=(text)=>({text, type:ADD_NOTE});
export const deleteNote=(index)=>({index,type:DELETE_NOTE})