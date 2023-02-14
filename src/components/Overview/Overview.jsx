import React from 'react'
import './Overview.scss'

function Overview(props) {
  return (
      <div className='overview-container'>

            <span className='name'>Overview</span>

            <div className='overview'>

                <div className='overview-left'>

                    <div className='overview-foto'></div>
                    
                    <div className='overview-infos'>
                        <span className='overview-name'>{props.name}</span>
                        <span className='overview-course'>{props.course}</span>
                    </div>

                    <div className='overview-sala'>
                        <span className='overview-turma'>Pixinguinha</span>
                        <span className='overview-periodo'>Vestibular - Manhã</span>
                    </div>

                </div>

                <div className='overview-right'>

                </div>

            </div>

      </div>
  )
}

export default Overview