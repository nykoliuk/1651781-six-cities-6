export const ACTION_TYPE = {
  CHANGE_CITY: `city/changeCity`,
  RENDER_OFFERS: `city/renderOffers`
}

export const ActionCreator = {
  changeCity: (city) => ({
    type: ACTION_TYPE.CHANGE_CITY,
    payload: city.name
  }),
  renderOffers: (city) => ({
    type: ACTION_TYPE.RENDER_OFFERS,
    payload: city.name
  })
}