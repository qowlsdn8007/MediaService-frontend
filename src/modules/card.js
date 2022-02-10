import { createAction, handleActions } from "redux-actions";

const CARDHOVER = "card/CARDHOVER";

export const cardHover = createAction(CARDHOVER);

const initialState = {
    cardHover: null,
};

const card = handleActions(
    {
        [CARDHOVER]: (state, { payload: cardHover }) => ({
            ...state,
            cardHover,
        }),
    },
    initialState,
);

export default card;
