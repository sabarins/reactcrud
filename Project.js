import React, { useState } from 'react';
import './style.css';

function Doremon()
{

        let [createfrd,setcreatefrd] = useState(-30);


        let dynamicdoremon = 
        {
            nameofperson : null,
            strength : null,
            power : null,
            love : null,
            imageurl : null
        }
        
        // let [valid,setvalid] = useState(dynamicdoremon);
 
        //     function validation(v)
        //     {
        //         if(v.nameofperson==="")
        //         {
        //             console.log("please fill");

        //         }
        //     }
        

        let [doremons,setdoremons] = useState([
            {
                nameofperson : "Doremon Friends!..",
                strength : 40,
                power : 60,
                love : 100,
                imageurl : "https://wallpapercave.com/wp/wp5533262.jpg"
            },
            {
                nameofperson : "Nobita!..",
                strength : 20,
                power : 50,
                love : 80,
                imageurl : "https://i.pinimg.com/474x/e9/36/ab/e936ab240156c33be7974c2c36188bdf.jpg"
            },
          
            
        ])
            function addfrnd()
            {
                setcreatefrd(0);
                console.log(createfrd);
            }
         
            

            function create()
            {
                setcreatefrd(-30);
                let s = [...doremons,dynamicdoremon];
                setdoremons(s);
                console.log(s);
            }
            let grp = {
                nameofperson:null
            }
            function update(e,i)
            {
                setcreatefrd(0);
                // let arr = doremons[index].nameofperson;
                // arr = ele.nameofperson;
                // console.log(arr);
                let t = i;
                let g = [...doremons];
                let ge = g[t].nameofperson;
                grp.nameofperson = ge;
                console.log(grp);
                
            }

            function deletefrnd(index)
            {
                let del = [...doremons];
                del.splice(index,1);
                console.log(del)
                setdoremons(del);
                
            }




            return(
              
                <div className='form-head'>

                    <div className="btns">
                        <button onClick = {addfrnd} className="btn">Add Friend</button>
                    </div>
                    {/* <form onChange={(v)=>
                    {
                        setvalid(validation(valid));
                    }}> */}
                    <div className='form' style={{marginLeft:createfrd+"%"}}>
                        <h3>Add Your Favourite Friend!..</h3>
                        <input type="text"  placeholder='Enter Name'  className='input' onChange={(e)=>
                        {
                            grp.nameofperson = e.target.value;
                           
                        }}></input>
                        <input type="number" defaultValue="0" placeholder='Enter Strength in Percent' className='input' onChange={(e)=>
                        {
                            console.log(e.target.value);
                            dynamicdoremon.strength = e.target.value;

                        }}></input>
                        <input type="text" placeholder='Enter Power in Percent' className='input' onChange={(e)=>
                        {
                            dynamicdoremon.power = e.target.value;
                        }}></input>
                        <input type="text"  placeholder='Enter Love in Percent'  className='input' onChange={(e)=>
                        {
                            dynamicdoremon.love = e.target.value;
                        }}></input>
                        <input type="text" placeholder='Enter Image URL' className='input' onChange={(e)=>
                        {
                            dynamicdoremon.imageurl = e.target.value;
                        }}></input>

                        <button className='btn' id='c' value="create" onClick={create}>Create Your Friend!..</button>
                        
                    </div>
                  
                        
                <div className='container'>
                   

                    {
                      
                        doremons.map((ele,index)=>
                        {
                            console.log(ele.strength);
                            return(
                                <div className='box' key={index}>
                                    <img src={ele.imageurl} width="242.8px" height="200px"></img>

                                    <div className='content'>
                                        <h4 className='ContentStyle'>{ele.nameofperson}</h4>
                                        <label style={{color:"white"}}>Strength</label><span className='spacecontent'><progress value={ele.strength} min="0" max="100"></progress></span>
                                        <label style={{color:"white"}}>Power</label><span className='spacecontent'><progress value={ele.power} min="0" max="100"></progress></span>
                                        <label style={{color:"white"}}>Love</label><span className='spacecontent'><progress value={ele.love} min="0" max="100"></progress></span>
                                        <div className="actions">
                                            <button className='btn col' onClick={(e)=>
                                            {
                                                update(ele,index);
                                            }}>Update</button>
                                            <button className='btn col2' onClick={()=>
                                            {
                                                deletefrnd(index);
                                            }}>Delete</button>
                                        </div>
                                   </div>
                                   

                                </div>

                             )
                        }
                        )
                    } 
                   
                  
                </div>
                </div>
            )
        }
        


export default Doremon;