import ChildCard from "./ChildCard";
import Navbar from "./Navbar";

const ParentCard = () => {
const jobs = [
  {
    companyName: "Microsoft",
    jobOpening: "yes",
    roleName: "Frontend Developer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    numberOfOpenings: 5,
    address: "Noida, UP ",
    interviewMode: "Online"
  },

  {
    companyName: "Amazon",
    jobOpening: "yes",
    roleName: "Backend Developer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    numberOfOpenings: 8,
    address: "Bangalore",
    interviewMode: "Online"
  },

  {
    companyName: "Google",
    jobOpening: "yes",
    roleName: "React Developer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    numberOfOpenings: 6,
    address: "Hyderabad, Telangana",
    interviewMode: "Hybrid"
  },

  {
    companyName: "TCS",
    jobOpening: "yes",
    roleName: "JavaScript Developer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Tata_Consultancy_Services_Logo.svg",
    numberOfOpenings: 10,
    address: "Mumbai, Maharashtra",
    interviewMode: "Online"
  },

  {
    companyName: "Infosys",
    jobOpening: "yes",
    roleName: "Node.js Developer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    numberOfOpenings: 7,
    address: "Pune, Maharashtra",
    interviewMode: "Offline"
  },

  {
    companyName: "Adobe",
    jobOpening: "yes",
    roleName: "Software Engineer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
    numberOfOpenings: 4,
    address: "Noida, Uttar Pradesh",
    interviewMode: "Hybrid"
  },

  {
    companyName: "Razorpay",
    jobOpening: "yes",
    roleName: "MERN Stack Developer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg",
    numberOfOpenings: 3,
    address: "Bangalore",
    interviewMode: "Online"
  },

  {
    companyName: "Paytm",
    jobOpening: "yes",
    roleName: "React Native Developer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/71/Paytm_logo.svg",
    numberOfOpenings: 5,
    address: "Gurgaon, Haryana",
    interviewMode: "Hybrid"
  },

  {
    companyName: "Zoho",
    jobOpening: "yes",
    roleName: "Full Stack Developer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/37/ZOHO_logo.svg",
    numberOfOpenings: 4,
    address: "Chennai, Tamil Nadu",
    interviewMode: "Online"
  },

  {
    companyName: "Freshworks",
    jobOpening: "yes",
    roleName: "Web Developer",
    photo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Freshworks-vector-logo.svg",
    numberOfOpenings: 3,
    address: "Chennai,TN",
    interviewMode: "Hybrid"
  }
];
  return (
    <>
    <div className="w-full min-h-screen ">
     <Navbar/>
     <div className="flex flex-wrap justify-center gap-5 p-4">
     {jobs.map((jobs)=>{
      return  <ChildCard jobs={jobs}/>
     })}
     </div>
   
    </div>
    </>
  )
}

export default ParentCard
