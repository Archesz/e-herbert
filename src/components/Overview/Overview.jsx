import React from 'react'
import './Overview.scss'

// Icons
function Overview(props) {
    return (
        <div className='overview-container'>

<<<<<<< HEAD
        </div>
    )
=======
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

                    <h2>Em breve</h2>

                </div>

            </div>

      </div>
  )
>>>>>>> f5ef68feee3913e6bb0572735a1dd9102bba66a6
}

export default Overview