import React from 'react'

export const Errors = ({ errors }) => {
  return (
    <>
      {errors.isErrors && (
        <div>
          <ul>
            {errors.errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
