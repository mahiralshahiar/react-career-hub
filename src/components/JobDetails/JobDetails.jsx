import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(jobs => jobs.id === idInt);
    console.log(job);

    return (
        <div>


            <div className="grid md:grid-cols-4 gap-4">

                <div className="border md:col-span-3">

                    <h2 className="text-4xl">Details Coming Here</h2>
                    <h2 className="text-6xl text-center">Job Details of {job.job_title} </h2>

                    <p>{job.company_name}</p>
                </div>
                <div className="border ">
                    <h1>Side thing</h1>
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;