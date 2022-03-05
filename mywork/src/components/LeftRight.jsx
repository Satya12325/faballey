import React,{useState} from 'react'
import { useEffect } from 'react'
import { Lastbuttons } from './Lastbuttons'
import { Left } from './Left'


import styles from "./leftright.module.css"
import { Slidingimgs2 } from './Slidingimg2'
import { Slidingimgs } from './Slidingimgs'

export const LeftRight = () => {
    const API_URL = "http://localhost:3500/Tops"
    const [items,setItems] = useState([])
    useEffect(() =>{
        const fetchItems = async() => {
            try{
                const response = await fetch(API_URL)
                if(!response.ok) throw Error ('Data not found')
                const listItems = await response.json()
                setItems(listItems)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchItems()
    },[])
  return (
    <>
    
        <div className={styles.warpperleftright}>
        <Left items = {items}/>
        <Slidingimgs/>
        <Slidingimgs2/>
       <Lastbuttons/>

        </div>
        
    </>
  )
}
