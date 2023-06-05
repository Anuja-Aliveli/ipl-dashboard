import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="team-card">
        <img className="team-logo" alt={name} src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
