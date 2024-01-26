import { ISuggestion } from "../../../types/ISuggestion";

interface ISTORE_INPUT_SEARCH_DATA {
  suggestionList: ISuggestion[];
}

export const STORE_INPUT_SEARCH_DATA: ISTORE_INPUT_SEARCH_DATA = {
  suggestionList: [
    { id: 1, queryLink: "LINK MUST BE THERE", text: "a" },
    { id: 2, queryLink: "LINK MUST BE THERE", text: "b" },
    { id: 3, queryLink: "LINK MUST BE THERE", text: "c" },
    //
    // { id: 4, queryLink: "LINK MUST BE THERE", text: "d" },
    // { id: 5, queryLink: "LINK MUST BE THERE", text: "h" },
    // { id: 6, queryLink: "LINK MUST BE THERE", text: "fg" },
    //
    // { id: 7, queryLink: "LINK MUST BE THERE", text: "" },
    // { id: 8, queryLink: "LINK MUST BE THERE", text: "" },
    // { id: 9, queryLink: "LINK MUST BE THERE", text: "" },
    // //
    // { id: 10, queryLink: "LINK MUST BE THERE", text: "" },
    // { id: 11, queryLink: "LINK MUST BE THERE", text: "" },
    // { id: 12, queryLink: "LINK MUST BE THERE", text: "" },
    //
  ],
};
