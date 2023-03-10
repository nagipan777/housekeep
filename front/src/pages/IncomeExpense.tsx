import React,{ useState, useEffect } from 'react';
import httpFront from './httpFront';
import { Total } from '../typets';

function IncomExpense (){
    const [total, setTotal] = useState<Total>();

    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        try{
            await httpFront.get('http://localhost:5000/payment/ie'
            ).then((response) => {
                const total = response.data;
                setTotal(total);                
            })}catch(error) {
                console.log(error);
            }
        }

    if(!total) return (
        <div>
            <h3 className='text-5xl'>￥0</h3> 
         </div>
    );
    //const totalblance  = total.toLocaleString();
    return (
         <div>
            <h3 className='text-5xl'>￥{total.total.toLocaleString()}</h3> 
         </div>
     )
}
export default IncomExpense;