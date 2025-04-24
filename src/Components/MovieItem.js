import React,{memo} from 'react';

const MovieItem =  ({item,key})  => (
  <li key={key} style={{display:'flex',flex:1,flexDirection:'column',borderWidth:1, borderColor:'lightgray', borderStyle:'solid',alignItems:'center',padding:20  }}>
    <h4 style={{width:200,display:'flex',flex:1,flexDirection:'column', }}>{item.primaryTitle}</h4>
    <img
      src={item.primaryImage}
      alt={item.primaryTitle}
      loading="lazy"
      style={{display:'flex',flex:3,flexDirection:'column', width: '200px', height: '400px' }} 
    />
  </li>
);
export default memo(MovieItem);