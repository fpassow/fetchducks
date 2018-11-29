import React from 'react'
import { connect } from 'react-redux'
import { fetchDucksAction } from './actions'

//--noncontainer to go inside container

const DuckbuttonComponent = ({fetchDucks, ducks})=>(
  <div>
    <button onClick={fetchDucks}>
      Fetch more ducks
    </button>
    {ducks.map((duck)=>(<div>{duck.name}</div>))}
   </div>
)

//--container--

const mapStateToProps = state => ({
  ducks: state.ducks
})

const mapDispatchToProps = dispatch => ({
  fetchDucks: () => dispatch(fetchDucksAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckbuttonComponent)
