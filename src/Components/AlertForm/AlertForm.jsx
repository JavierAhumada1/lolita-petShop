import React from 'react'

const AlertForm = ({alert}) => {
  return (
    <div className={`${alert.error ? "bg-red" : "bg-green"} p-2 rounded-xl text-center uppercase text-white text-sm font-bold m-4`}>
        {alert.msg}
    </div>
  )
}

export default AlertForm