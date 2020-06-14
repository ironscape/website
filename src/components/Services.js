import React from "react"

const ServicesToggle = ({ servicesTab }) => (
  <div className="columns is-multiline">
    {servicesTab.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: "240px",
                display: "inline-block",
              }}
            ></div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

export default ServicesToggle
