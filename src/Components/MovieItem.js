import React,{memo} from 'react';

const MovieItem =  ({item,key})  => (
  <li key={key} style={styles.listContainer}>
    <h4 style={styles.title}>{item.primaryTitle}</h4>
    <img
      src={item.primaryImage}
      alt={item.primaryTitle}
      loading="lazy"
      style={styles.imageStyle} 
    />
  </li>
);
export default memo(MovieItem);
const styles = {
    listContainer :{display:'flex',flex:1,flexDirection:'column',borderWidth:2, borderColor:'lightgrey', borderStyle:'solid',alignItems:'center',padding:20  },
    title :{width:200,display:'flex',flex:1,flexDirection:'column', },
    imageStyle:{display:'flex',flex:3,flexDirection:'column', width: '200px', height: '400px' }
}