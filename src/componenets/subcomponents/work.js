
export const Work = ({projectName, image, gitHubRepo, description, link}) =>{
return(
  <div className="font-mono backdrop-sepia-0 bg-white/30 p-4 text-gray-900 text-lg content-center  group my-4">
   <a  href={link}><img className="shadow-2xl" src={image} width="500" height="40" alt="" /></a>
  <h1>{projectName}</h1>
   <a  href={gitHubRepo}>{description} </a>
  </div>

);
};