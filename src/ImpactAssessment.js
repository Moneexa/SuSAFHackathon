import { React, useEffect } from 'react'
import { useStoreState } from 'easy-peasy'
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom'


function ImpactAssessment() {
    const navigate = useNavigate()
    const graphValues = useStoreState((state) => state.graphValues);
    const colors = ['#fb56b9', '#aa65a3', '#7afcff', '#deff9c', '#fff740'];
    return (
        <div className="m-5">
            <button className='btn btn-primary m-3 align-items-right' onClick={() => {
                navigate('/stepper')
            }}>Add another feature</button>
            <div className="d-flex">
                <div className="d-flex align-items-center justify-content-center">
                    Likelihood
                </div>
                <div style={{
                    borderLeft: "0.5px solid black",
                    height: "100%",
                    position: "absolute",
                    left: "10%"
                }}></div>
                <div className="d-flex flex-column w-100">
                    <div style={{ height: '100vh', top: 0, left: 0 }}>
                        {graphValues.map((point, index) => {
                            return <Draggable><div style={{
                                display: 'inline-block',
                                position: 'absolute',
                                top: `${point.y}vh`,
                                left: `${point.x}vw`,
                                padding: '10px',
                                width: '100px',
                                height: '100px',
                                backgroundColor: colors[index]
                            }}>
                                <div>{point.text}</div>
                            </div>
                            </Draggable>
                        })}
                    </div>

                    <hr
                        style={{
                            width: "100%",
                            size: "20",
                            borderLeft: "1px solid black"
                        }}
                    />
                    <div>Intensity</div>
                </div>
            </div>
        </div >
    )
}

export default ImpactAssessment