export function getTodos() {
  return {
    type: 'GET_TODOS'
  };
}

export async function setProducts(payload) {
  return {
    type: 'SET_PRODUCTS',
    payload
  };
}
