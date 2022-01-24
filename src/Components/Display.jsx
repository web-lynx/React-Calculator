export const Display = ({ value }) => {
  return (
    <div id='display'>
      <p id="previouscalc"></p>
      <p id="currentcalc">{value}</p>
    </div>
  )
}
