import React from 'react'
import CardService from '../CardService'
import style from './style.module.scss'

export default function MyServices() {
  return (




    <section>


<div className="card border-0 rounded-0">
  <img src="/bg.jpg" className="card-img" alt="..."/>
  <div className="card-img-overlay">


  
<h1 className='fw-bold display-3 text-white'>Lorem Ipsum <span className='text-red'>Dolor</span></h1>
        <h3 className='text-secondary'>Lorem Ipsum Dolor</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">

            <CardService icon='Lorem Ipsum' title='teste' description='teste'/>
            <CardService icon='Lorem Ipsum' title='teste' description='teste'/>

            <CardService icon='Lorem Ipsum' title='teste' description='teste'/>
            <CardService icon='Lorem Ipsum' title='teste' description='teste'/>
            <CardService icon='Lorem Ipsum' title='teste' description='Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'/>



</div>


  </div>
</div>














    </section>
  )
}
