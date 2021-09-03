import {Chrono} from 'react-chrono'
import {Container, Heading, CCBPHeading} from './styledComponents'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

// Write your code here
const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <Container>
      <Heading>
        MY JOURNEY OF <br />
        <CCBPHeading>CCBP 4.0</CCBPHeading>
      </Heading>
      <Chrono
        theme={{
          secondary: 'white',
        }}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </Container>
  )
}
export default TimelineView
