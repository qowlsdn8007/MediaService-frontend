import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
const CARDHOVER = "card/CARDHOVER";

export const cardHover = createAction(CARDHOVER);

const initialState = {
    cardHover: null,
};

const card = handleActions(
    {
        [CARDHOVER]: (state, { payload: cardHover }) =>
            produce(state, (draft) => {
                draft.cardHover = cardHover;
            }),
    },
    initialState,
);

export default card;
