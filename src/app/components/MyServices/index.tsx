import React from 'react'
import CardService from '../CardService'
import style from './style.module.scss'

export default function MyServices() {
  return (
    <section className={style['bg-dark-800']}>
        <div className="container py-5">

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
    </section>
  )
}
