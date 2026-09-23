import CardComponents from "./Components/CardComponents"

const App = () => {
 const jobs = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Rahul Sharma",
    role: "Frontend Engineer",
    company: "Google",
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Priya Singh",
    role: "Backend Engineer",
    company: "Microsoft",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Aman Verma",
    role: "Full Stack Developer",
    company: "Amazon",
  },
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Neha Gupta",
    role: "React Developer",
    company: "Meta",
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Rohit Kumar",
    role: "UI/UX Designer",
    company: "Adobe",
  },
  {
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Anjali Mishra",
    role: "Software Engineer",
    company: "Apple",
  },
  {
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Vikas Yadav",
    role: "Node.js Developer",
    company: "Netflix",
  },
  {
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sneha Patel",
    role: "Data Analyst",
    company: "IBM",
  },
  {
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Arjun Mehta",
    role: "DevOps Engineer",
    company: "AWS",
  },
  {
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Pooja Sharma",
    role: "Mobile App Developer",
    company: "Microsoft",
  },
];
  return (
    <div className=" flex flex-wrap justify-center ">
    {jobs.map((elm)=>{
      return   <CardComponents jobs={elm}/>
    })}
  
   </div>
  )
}

export default App