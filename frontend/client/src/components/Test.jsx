import React from 'react'
import axios from 'axios';

export default function Test() {

    const getData = async () => {
        await axios.get('http://localhost:4000/users')
        .then(res => console.log(res.data))
    }

    getData();
  return (
    <div>Test</div>
  )
}
