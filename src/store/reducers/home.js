const INITIAL_STATE = {
  products: [{ id: 1, name: 'PRODUTO UM' }]
};

export default function reducer(state = INITIAL_STATE, action) {
  console.log('passei', action);

  return state;
}
