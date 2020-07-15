import React from "react"
import { Button } from "antd"
import "./LandingHeader.less"
import Link from "next/link"

function LandingHeader() {
  return (
    <div className="header__container">
      <div className="half__width">
        <p className="heading-text">
          Get products on your favourite Online store at your desired price.
        </p>
        <p className="heading-subtext">
          Keeping up with prices on stores online can be very tedious😫. With
          pTracker, you can track those products without having to worry. You
          will receive an email alert when the products are selling at the price
          you chose.
        </p>

        <Link href="/dashboard">
          <a>
            <Button
              type="primary"
              size="large"
              className="button__custom get__started__btn"
            >
              Get Started
            </Button>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Button size="large" className="button__custom" type="info">
              Learn More
            </Button>
          </a>
        </Link>
      </div>
      <div className="half__width image-col">
        <img
          className="  animate__animated animate__bounce  animate__slower"
          src="./images/stock.svg"
          alt="price discounts"
        />
      </div>
    </div>
  )
}

export default LandingHeader