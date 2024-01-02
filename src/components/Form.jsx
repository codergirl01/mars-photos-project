
import React, { useState } from 'react'


function Form({fetchImages}) {
    const [solarDay, setSolarDay] = useState(0)
    const [camera, setCamera] = useState("any")
    const handleSubmit = (e) => {
       e.preventDefault()
       fetchImages(solarDay, camera)
    }
     return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="solar-container"><label >Sol (Mars Solar Day)</label></div>
                <div className="solar-input"><input type="number" value={solarDay} onChange={(e) => setSolarDay(e.target.value)} /></div>
                <div className="camera-container"><label >Camera</label></div>
                <div className="camera-input"><select value={camera} onChange={(e) => setCamera(e.target.value)} >
                    <option value="any">Any</option>
                    <option value="mast">Mast Camera</option>
                    <option value="navcam">Navigation Camera</option>
                    <option value="fhaz">Front Hazard Avoidance Camera</option>
                </select>
                </div>
                <button className="submit" type="submit">Find Photos</button>
            </form>
        </div>
    )
}

export default Form