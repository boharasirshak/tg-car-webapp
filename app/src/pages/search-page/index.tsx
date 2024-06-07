import { Car } from '@/components/Car-card/Car'
import { Link } from '@/components/Link/Link'
import React from 'react'

const index = () => {
  return (
    <div>
      <Car/>
      <Link href={"/init-data"}>Init Data</Link>
    </div>
  )
}

export default index

