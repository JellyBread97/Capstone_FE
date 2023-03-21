export const SAVE_USER = "SAVE_USER";
export const SAVE_USERS = "SAVE_USERS";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const FETCH_COCKTAILS = "FETCH_COCKTAILS";
export const SAVE_COCKTAIL = "SAVE_COCKTAIL";
export const SAVE_ING = "SAVE_ING";

const apiUrl = process.env.REACT_APP_BE_URL;

export const saveIngAction = (ing) => {
  return {
    type: SAVE_ING,
    payload: ing,
  };
};

export const saveCocktailAction = (cocktail) => {
  return {
    type: SAVE_COCKTAIL,
    payload: cocktail,
  };
};

export const fetchCocktailsAction = (accessToken) => {
  return async (dispatch, getState) => {
    try {
      const fetchCocktailsOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(`${apiUrl}/recipes`, fetchCocktailsOptions);
      const cocktails = await response.json();
      dispatch({ type: FETCH_COCKTAILS, payload: cocktails });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMyUserDetailsAction = (accessToken) => {
  return async (dispatch, getState) => {
    const optionsGet = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/me`,
        optionsGet
      );
      if (response.ok || response.status === 204) {
        let data = await response.json();

        dispatch({
          type: SAVE_USER,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchIngs = (accessToken) => {
  return async (dispatch, getState) => {
    try {
      const fetchIngsOpts = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(`${apiUrl}/ingredients`, fetchIngsOpts);
      const ings = await response.json();
      dispatch(saveIngAction(ings));
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveUserAction = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const getUsersAction = (accessToken) => {
  return async (dispatch, getstate) => {
    try {
      const fetchMenuOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(`${apiUrl}/users/`, fetchMenuOptions);
      if (response.ok) {
        const fetchedData = await response.json();
        dispatch({ type: SAVE_USERS, payload: fetchedData });
        saveTokenAction(fetchedData.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveTokenAction = (token) => {
  return {
    type: SAVE_TOKEN,
    payload: token,
  };
};
