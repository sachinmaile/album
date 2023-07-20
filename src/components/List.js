import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

//get album from album list and show using html css and js
const List = (props) => {
  return (
    <div className='list'>
      <h3>{props.album.title}</h3>
      <div className='button-group'>
        <Link to="/update-album"><Button variant="warning" onClick={() => props.setUpdateAlbum(props.album)}>Update</Button></Link>
        <Button variant='danger' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</Button>
      </div>
    </div>
  )
}

export default List
