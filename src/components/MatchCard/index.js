// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = recentDetails
  const statusName = matchStatus === 'Lost' ? 'status-lost' : 'status-won'
  return (
    <li className="card">
      <img
        className="card-image"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="team-head">{competingTeam}</p>
      <p className="team-result">{result}</p>
      <p className={statusName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
