import React, { useEffect } from 'react';
import axios from 'axios'

export default () => {

  function deleteIt(id) {
    axios.delete('/api/example/' + id).then(resp => {
      console.log(resp.data)
    })
  }

  function postIt(obj) {
    axios.post('/api/example', obj).then(resp => {
      console.log(resp.data)
    })
  }

  function getIt() {
    axios.get('/api/example').then(resp => {
      console.log(resp.data)
    })
  }

  function patchIt(obj) {
    axios.patch('/api/example/' + obj.id, { text: obj.text }).then(resp => {
      console.log(resp.data)
    })
  }
  return (
    <div className="Example">
      <button onClick={getIt}>get</button>
      <button onClick={() => postIt({ id: 1, name: 'john' })}>post</button>
      <button onClick={() => deleteIt(1)}>delete</button>
      <button onClick={() => patchIt({ id: 2, text: 1 })}>patch</button>
    </div>
  )
}