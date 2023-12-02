import { Component } from 'react';
import Header from '../Header'
import './index.css' 


class Dashboard extends Component{


    render(){
        return(
            <>
            <Header/>
            <div className='dashboardContainer'>
                <div>
                    <div className='top'>
                        <h2 className='dashboard '>Dashboard</h2>
                        <div className='top'>
                            <p className='availability'>Availability</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        
        )
    }
}
    
    
    

export default Dashboard;