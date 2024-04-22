import React from 'react'
import Link from "next/link";
import './Add.scss'

function Add() {
  return (
    <div className='add'>
      <Link href="/add" className='addButton'>ADD</Link>
    </div>
  )
}

export default Add
