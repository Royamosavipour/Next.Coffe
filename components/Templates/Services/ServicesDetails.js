import React from 'react'
import ServiseItem from '@/components/Modules/ServiseItem/ServiseItem'

export default function Services({services}) {
  return (
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
          {services.map((service) => (
            <ServiseItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}
