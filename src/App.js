import Border from "./components/Border";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Extracurriculars from "./components/Extracurriculars";
import Heading from "./components/Heading"
import Interest from "./components/Interest";
import Skills from "./components/Skills";

const App =()=>{

  const resume = {
    interests : ['Drawing','Photography','Design','Programming','Computer Science'],
    experience : [{ year:2012, company:'xyz', role:'something' }],
    education : ['Wilton High School','Silvermine School of Arts','Codeacademy'],
    skills : ['Web Design with HTML & CSS'],
    extracurriculars : ['Recycling Club','Gardening Club','Book Club']
  }

  return (
    <>
    <Border>
    <Heading name={'Adhiraj'}/>
    </Border>

    <Interest interests={resume.interests}/>
    <Experience experience={resume.experience}/>
    <Education education={resume.education}/>
    <Skills skills={resume.skills}/>
    <Extracurriculars extracurriculars={resume.extracurriculars}/>
    </>
  )
}
export default App;