import React from 'react'
import { connect } from 'react-redux'
import { fetchDucksAction } from './actions'

//--noncontainer to go inside container

const DuckbuttonComponent = ({fetchDucks, loading, ducks})=>(
  <div>
    {loading?<img src="spinning_duck.gif" alt="spinning duck" /> : <img src="static_duck.png" alt="duck" />}
    <br />
    <button onClick={fetchDucks}>
      Fetch more ducks
    </button> 
    {ducks.map((duck)=>(<div>{duck.name}</div>))}
   </div>
)

//--container--

const mapStateToProps = state => ({
  ducks: state.ducks,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  fetchDucks: () => dispatch(fetchDucksAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckbuttonComponent)
