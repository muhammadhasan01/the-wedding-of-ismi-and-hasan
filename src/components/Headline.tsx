import React from "react"

import Card from "@components/Card"
import Countdown from "@components/Countdown"
import { renderCoupleNames, renderDateTime } from "@utils/utils"

const Headline = () => {
  return (
    <Card title="Pernikahan">
      {renderCoupleNames()}
      <div>InsyaAllah akan dilaksanakan pada:</div>
      {renderDateTime()}
      <Countdown />
    </Card>
  )
}

export default Headline
