import React from "react";
import PageTextArea from "../Reusable/PageTextArea";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-mydark2 mt-12 py-12 lg:ml-64">
      <PageTextArea
        heading={"Dashboard"}
        body={
          "This is a showcase website for the models that we have individually created. There are both Machine Learning and Deep Learning Models. The server used python FastAPI is hosted on huggingFace Spaces."
        }
      />

      <PageTextArea
        heading={"2 Models Available"}
        body={
          "Currently there are 2 models available. A Student's maths marks Prediction Model and a Cat Dog classification model. The github links to the models, accuracy charts, other key points of interest will be added later on."
        }
      />

      <PageTextArea
        heading={"Thank You"}
        body={
          "This website is currently being developed and more models will be added soon. Thank You"
        }
        developedBy={'View Credits'}
      />
    </div>
  );
};

export default Dashboard;
