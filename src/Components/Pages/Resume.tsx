import React, { FC } from 'react';
import ResumeHolder from "./Display/ResumeHolder"
type Resume = {

}
let style = {
    fontFamily: 'Roboto, sans-serif',

}
// eslint-disable-next-line no-empty-pattern
const Title: FC<Resume> = ({ }) => {
    return (
        <div style = {style} className="d-flex flex-column justify-content-center align-items-center p-5">
            <h1>Resumes</h1>
            <div  className="d-flex-inline flex-column justify-content-center align-items-center p-5">
                <ResumeHolder title="General Resume" resumeSource='../../resumes/resume_general.pdf'/>
            </div>
        </div>
    );
};

export default Title;