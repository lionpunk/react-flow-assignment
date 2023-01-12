import React from 'react'

export default function NodeHeader({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <p className="node_title">{children}</p>
      <hr />
    </React.Fragment>
  )
}
