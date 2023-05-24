import React from 'react'

export default function User({user}) {
  return (
    <div>
          Name:{user.name} ---- status:{user.status}
    </div>
  )
}
