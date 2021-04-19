import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import db from './config';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      teamsRank:[]

    }
  }
  showTeamsRank=()=>{
    var teams=[]
    var teamRef=db.ref('teams/')
    teamRef.on('value',(data)=>{
      var teamList=data.val()
      for(var team in teamList){
        if(teamList[team]['isButttonPressed']==true){
          teamList[team]['teamName']=team
          teams.push(teamList[team])
        }
      }
      teams.sort(function(team1,team2){
        return team1.timeStamp-team2.timeStamp
      })
         this.setState({teamsRank:teams})
         teams=[]
    })
  }
  resetDB=()=>{
  var resetdatabase=db.ref('teams/').set({
    red:{
      isButttonPressed:false,
      timeStamp:0
    },
    green:{
      isButttonPressed:false,
      timeStamp:0
    },
    blue:{
      isButttonPressed:false,
      timeStamp:0
    },
    yellow:{
      isButttonPressed:false,
      timeStamp:0
    }
    
    
  })
  this.setState({
    teamsRank:[]
  })
  }
  componentDidMount(){
    this.showTeamsRank()
  }
render(){
  return(
<View style={{flex:1}}>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
{this.state.teamsRank.map((team)=>(
  <View style={{
    width:150,
    height:55,
    borderWidth:2,
    margin:5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:team.teamName
  }}>
  <Text>{team.teamName.toUpperCase()}</Text>
  </View>
))}
</View>
<Button
title='reset'
style={{width:100,height:100}}
onPress={this.resetDB}/>
</View>
  )
}
}