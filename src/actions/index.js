
const URL = "https://oftheworldback-production.up.railway.app"

export const getCountries = () => {
  return async function (dispatch) {
    const resp = await fetch(`${URL}`)
    const data = await resp.json()
    return dispatch({ type: "GET-COUNTRIES", payload: data })
  }
};

//http://localhost:3001/countries/${param}
export const getCountry = (param) => {
  if (param) {
    return async function (dispatch) {
      const resp = await fetch(`${URL}/countries/${param}`)
      const data = await resp.json()
      return dispatch({ type: "GET-COUNTRY", payload: data })
    }
  }
  return function (dispatch) {
    return dispatch({ type: "GET-COUNTRY", payload: '' })
  }
};
