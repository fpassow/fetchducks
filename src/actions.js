//Redux action creators

export function fetchDucksAction() {
	return async (dispatch)=>{
	  dispatch(fetchingDucks())
      let duckStream = await fetch('/ducks.json')
      let ducks = await duckStream.json()
      dispatch(ducksReceived(ducks))
	} 
}

function fetchingDucks() {
	return {type:'FETCHING_DUCKS'}
}

function ducksReceived(ducks) {
	return {
		type: 'DUCKS_RECEIVED',
		ducks:ducks
	}
}