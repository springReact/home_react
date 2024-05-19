import React from 'react';
import BasicLayout from "../layouts/BasicLayout";
import {Link} from "react-router-dom";

const AboutPage = (props) => {
  return (
    <>
      <BasicLayout>
        <div className={'text-3xl'}>About Page</div>
      </BasicLayout>
    </>
  );
}

export default AboutPage;