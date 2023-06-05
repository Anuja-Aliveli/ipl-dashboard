import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch
  return (
    <>
      <h1 className="text-main">Latest Matches</h1>
      <div className="latest-container">
        <div className="first-part-container">
          <div className="first-part">
            <p className="team-text">{competingTeam}</p>
            <p className="team-text">{date}</p>
            <p className="text-main">{venue}</p>
            <p className="text-main">{result}</p>
          </div>
          <img
            className="latest-image"
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
          />
        </div>
        <div className="second-part">
          <p className="text">First Innings</p>
          <p className="text">{firstInnings}</p>
          <p className="text">Second Innings</p>
          <p className="text">{secondInnings}</p>
          <p className="text">MAN OF THE MATCH</p>
          <p className="text">{manOfTheMatch}</p>
          <p className="text">Umpires</p>
          <p className="text">{umpires}</p>
        </div>
      </div>
    </>
  )
}
export default LatestMatch
