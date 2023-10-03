
const Job = ({ job }) => {
    const { logo } = job;
    return (
        <div>
            <img src={logo} alt="Job Logo" />
        </div>
    );
};

export default Job;