import React from 'react'
import CountUp from 'react-countup'

function Cards({data}){
    if(!data.confirmed){
        return "Loading";
    }
    return (
        
        <div className="flex flex-wrap justify-center ph5 mt5">

                <div className="w5 mw5 ba br3 pa3 grow bg-blue mv3 mh4">
                    <div className="tc">
                        <h1 className="f4">State</h1>
                        <hr className="mw3 bb bw1 b--black-10"/>
                    </div>
                    <p className="tc b f4">
                        {data.state}
                    </p>
                </div>
                <div className="w5 mw5 ba br3 pa3 grow bg-yellow mv3 mh4">
                    <div className="tc">
                        <h1 className="f4">Confirmed</h1>
                        <hr className="mw3 bb bw1 b--black-10"/>
                    </div>
                    <p className="tc b f4">
                        <CountUp 
                            start={0} 
                            end={parseInt(data.confirmed)} 
                            duration={0.75} 
                            separator="," 
                        />
                    </p>
                </div>
                <div className="w5 mw5 ba br3 pa3 grow bg-orange mv3 mh4">
                    <div className="tc">
                        <h1 className="f4">Active</h1>
                        <hr className="mw3 bb bw1 b--black-10"/>
                    </div>
                    <p className="tc b f4">
                        <CountUp 
                            start={0} 
                            end={parseInt(data.active)} 
                            duration={0.75} 
                            separator="," 
                        />
                    </p>
                </div>
                <div className="w5 mw5 ba br3 pa3 grow bg-green mv3 mh4">
                    <div className="tc">
                        <h1 className="f4">Recovered</h1>
                        <hr className="mw3 bb bw1 b--black-10"/>
                    </div>
                    <p className="tc b f4">
                        <CountUp 
                            start={0} 
                            end={parseInt(data.recovered)} 
                            duration={0.75} 
                            separator="," 
                        />
                    </p>
                </div>
                <div className="w5 mw5  ba br3 pa3 grow bg-red mv3 mh4">
                    <div className="tc">
                        <h1 className="f4">Deaths</h1>
                        <hr className="mw3 bb bw1 b--black-10"/>
                    </div>
                    <p className="tc b f4">
                        <CountUp 
                            start={0} 
                            end={parseInt(data.deaths)} 
                            duration={0.75} 
                            separator="," 
                        />
                    </p>
                </div>
                <div className="w5 mw5 ba br3 pa3 grow bg-blue mv3 mh4">
                    <div className="tc">
                        <h1 className="f4">Last updated</h1>
                        <hr className="mw3 bb bw1 b--black-10"/>
                    </div>
                    <p className="tc b f4">
                        {data.lastupdatedtime}
                    </p>
                </div>
                
            </div>
    )
}

export default Cards
