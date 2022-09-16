import GoalHeader from '../../components/GoalHeader/GoalHeader'
import GoalNavbar from '../../components/GoalNavbar/GoalNavbar'
import TaskCard from '../../components/TaskCard/TaskCard'
import './Milestone.scss'

function Milestone() {
  return (
    <main className="milestone">
      <GoalHeader />
      <h2 className="milestone__subheader">Improve Communication Skills</h2>
      <TaskCard />
      <GoalNavbar />
    </main>

  )
}

export default Milestone