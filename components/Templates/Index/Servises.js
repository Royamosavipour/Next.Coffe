import React from 'react'
import ServiseItem from '@/components/Modules/ServiseItem/ServiseItem'

export default function Servises() {
  return (
    <>
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 class="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div class="row">
          <ServiseItem
            title="Fastest Door Delivery"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/images/service-1.jpg"
            icon="faTruck"
          />
          <ServiseItem
            title="Fresh Coffee Beans"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/images/service-2.jpg"
            icon="faCoffee"
          />
          <ServiseItem
            title="Online Table Booking"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/images/service-3.jpg"
            icon="faAward"
          />
          <ServiseItem
            title="Best Quality Coffee"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/images/service-4.jpg"
            icon="faTable"
          />
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}
