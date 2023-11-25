import React from 'react'

const AlertComponent = ({text}) => {
  return (
    <>
      {text && 
      <div className='AlertContainer'>
        <div className='AlertOKcontainer'>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {ui.language == 'persian' ? <p> عملیات با موفقیت انجام شد</p>
          : <p>process done successfuly</p>
          }
        </div>
      </div>
      }
      {!text && 
      <div className="AlertContainer">
        <div className='AlertFailedcontainer'>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {ui.language == 'persian' ? <p> عملیات انجام نشد</p>
          : <p>process failed</p>
          }
        </div>
      </div>
      }
    </>
  )
}

export default AlertComponent