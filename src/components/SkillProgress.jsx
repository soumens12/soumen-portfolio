import React from 'react'

function SkillProgress({progress, color, label}) {
  return (
    <>
        <div className="mb-3">
            {label && <p className='mb-2 d-flex justify-content-between'>{label} <span className='text-warning'>{progress}%</span></p>}
            <div className="progress" style={{height: "5px"}}>
                <div
                className={`progress-bar ${color ? `bg-${color}` : ''}`}
                role="progressbar"
                style={{ width: `${progress}%`, height: "5px" }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                >
                
                </div>
            </div>
        </div>
    </>
  )
}

export default SkillProgress