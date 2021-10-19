import * as React from "react"
const StaticPage = () => (
  <main>
    <h1>SSR Page with Dogs</h1>
    <p>Page loads image dynamically from dog photo API</p>
    <img
      alt="Happy dog"
      src="https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190811_105047.jpg"
    />
  </main>
)
export default StaticPage
