import Header from './../Header'
import Content from './../Content'
import Total from './../Total'

const Course = ({ courses }) => {
    console.log(courses)
    return(
      <div>
      <Header courses={courses[0].name} />
      <Content parts={courses[0].parts}/>
      <Total total={courses[0]}/>
      <Header courses={courses[1].name}/>
      <Content parts={courses[1].parts}/>
      <Total total={courses[1]}/>
    </div>
    )
    }
export default Course